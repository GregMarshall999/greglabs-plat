<template>
	<MovieFormModal 
		v-if="displayMovieModal"
		v-model="newMovie" 
		:movies="movies"
		:edit-mode="editMode"
		@close="closeMovieModal"
		@submit="submitMovie"
	/>

	<div class="container">
    	<h1>Rate your Movies</h1>

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
import MoviesAnalytics from './components/MoviesAnalytics.vue';
import MovieItem from './components/MovieItem.vue';
import MovieFormModal from './components/MovieFormModal.vue';
import { items } from './movies.json';
import { reactive, ref } from 'vue';

//Modal

const displayMovieModal = ref(false);
const editMode = ref(false);

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

const movies = ref(items);

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

<style>

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	background-color: #111826;
	font-family: 'Manrope', sans-serif;
	color: #fff;
}

.container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 20px;
	display: flex;
	flex-direction: column;
	gap: 2em;
}

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