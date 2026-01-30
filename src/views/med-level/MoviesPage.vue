<template>
  <AsyncMovieModal 
    :display-modal="displayMovieModal" 
    @close="closeMovieModal"
    @submit="submitMovie"
  >
    <template #title>
      {{ $t('medLevel.movies.addMovie') }}
    </template>

    <template #default>
      <TextInput
        required
        v-model="newMovie.name"
        focus
      >
        {{ $t('medLevel.movies.name') }}
      </TextInput>

      <TextAreaInput v-model="newMovie.description">
        {{ $t('medLevel.movies.description') }}
      </TextAreaInput>

      <TagsInput
        :tags="movieGenres"
        v-model="newMovie.genres"
      >
        {{ $t('medLevel.movies.genres') }}
      </TagsInput>

      <TextInput
        required
        v-model="newMovie.image"
      >
        {{ $t('medLevel.movies.image') }}
      </TextInput>

      <CheckboxInput
        id="in-theaters"
        v-model="newMovie.inTheaters"
      >
        {{ $t('medLevel.movies.inTheaters') }}
      </CheckboxInput>
    </template>

    <template #close-button>
      {{ $t('medLevel.movies.cancel') }}
    </template>
    <template #submit-button>
      {{ editMode ? $t('medLevel.movies.update') : $t('medLevel.movies.create') }}
    </template>
  </AsyncMovieModal>

  <div class="container">
    <h1>{{ $t('medLevel.movies.title') }}</h1>

    <MoviesAnalytics 
      :movies="movies" 
      @remove-ratings="removeRatings"
      @add-movie="addMovie"
    />
		
    <ul class="movies">
      <MovieItem 
        v-for="movie in movies" 
        :key="movie.id" 
        :movie="movie" 
        @edit="editMovie"
        @remove="removeMovie"
        @update-rating="updateRating"
      />
    </ul>
  </div>
</template>

<script setup>
import MoviesAnalytics from '@/components/med-level/movies/MoviesAnalytics.vue';
import MovieItem from '@/components/med-level/movies/MovieItem.vue';
import TextInput from '@/components/med-level/form-inputs/TextInput.vue';
import TextAreaInput from '@/components/med-level/form-inputs/TextAreaInput.vue';
import TagsInput from '@/components/med-level/form-inputs/TagsInput.vue';
import CheckboxInput from '@/components/med-level/form-inputs/CheckboxInput.vue';
import { items } from '@/config/med-level/movies.json';
import { reactive, ref, computed, defineAsyncComponent } from 'vue';

const AsyncMovieModal = defineAsyncComponent(() => import('@/components/med-level/movies/MovieModal.vue'));

const movies = ref(items);

//Modal

const displayMovieModal = ref(false);
const editMode = ref(false);

const movieGenres = computed(() => {
	let allGenres = movies.value.flatMap(movie => movie.genres);
    return [...new Set(allGenres)];
});

const closeMovieModal = () => {
	displayMovieModal.value = false;
	editMode.value = false;

	newMovie.id = 0;
	newMovie.name = '';
	newMovie.description = '';
	newMovie.image = '';
	newMovie.rating = 0;
	newMovie.genres = [];
	newMovie.inTheaters = false;
};

//Movie CUD

const newMovie = reactive({
	id: 0,
	name: '',
	description: '',
	image: '',
	rating: 0,
	genres: [],
	inTheaters: false
});

const addMovie = () => {
	displayMovieModal.value = true;
	editMode.value = false;
};

const editMovie = movieId => {
	displayMovieModal.value = true;
	editMode.value = true;

	const movie = movies.value.find(movie => movie.id === movieId);

	newMovie.id = movie.id;
	newMovie.name = movie.name;
	newMovie.description = movie.description;
	newMovie.image = movie.image;
	newMovie.rating = movie.rating;
	newMovie.genres = movie.genres;
	newMovie.inTheaters = movie.inTheaters;
};

const removeMovie = movieId => {
	movies.value = movies.value.filter(movie => movie.id !== movieId);
};

const submitMovie = () => {
	if(editMode.value) {
		const movie = movies.value.find(movie => movie.id === newMovie.id);

		movie.name = newMovie.name;
		movie.description = newMovie.description;
		movie.image = newMovie.image;
		movie.genres = newMovie.genres;
		movie.inTheaters = newMovie.inTheaters;
	}
	else {
		const movie = { ...newMovie };

		let highestId = 0;
		movies.value.forEach(movie => {
			if(movie.id > highestId) {
				highestId = movie.id;
			}
		});
		movie.id = highestId + 1;

		movies.value.push(movie);
	}

	closeMovieModal();
};

//Ratings

const removeRatings = () => {
	movies.value.forEach(movie => {
		movie.rating = 0;
	});
};

const updateRating = (movieId, starNum) => {
	const movie = movies.value.find(movie => movie.id === movieId);
	movie.rating = starNum;
};

</script>

<style scoped>

h1 {
	color: #fff;
	font-size: 2rem;
	margin-bottom: 1em;
}

.movies {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
	gap: 20px;
	list-style: none;
	padding: 0;
}

@media (max-width: 768px) {
	.movies {
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	}
}

@media (max-width: 480px) {
	.movies {
		grid-template-columns: 1fr;
	}
}

</style>