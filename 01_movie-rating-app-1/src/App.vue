<template>
	<div class="container">
		<h1>Movies</h1>

    <header class="movies-header">
      <div class="movies-header-info">
        <p>Total movies: {{ movies.length }}</p>
        <p>/</p>
        <p>Average rating: {{ averageRating }}</p>
      </div>  

      <div class="movies-header-buttons">
        <button class="movie-button" @click="removeRatings">Remove Ratings</button>
        <button class="movie-button" @click="showMovieModal">Add Movie</button>
      </div>
    </header>

    <div v-if="displayMovieModal" class="movie-modal">
      <form class="movie-form" @submit.prevent="submitMovie">
        <div class="form-item">
          <label>Name</label>
          <input 
            v-model="newMovie.name"
            class="form-input" 
            type="text" 
            required
          />
        </div>

        <div class="form-item">
          <label>Description</label>
          <textarea v-model="newMovie.description" class="form-input form-text"></textarea>
        </div>
        
        <div class="form-item">
          <label>Image</label>
          <input 
            v-model="newMovie.image"
            class="form-input" 
            type="text"
            required
          />
        </div>

        <div class="form-item">
          <label>Genres</label>
          <div class="genres-input-container">
            <div class="genres-list">
              <span 
                v-for="genre in movieGenres" 
                :key="genre"
                class="genre-tag"
                :class="{ 'selected': newMovie.genres.includes(genre) }"
                @click="toggleGenre(genre)"
              >
                {{ genre }}
              </span>
            </div>
            <div class="new-genre-input">
              <input 
                v-model="newGenre" 
                class="form-input" 
                type="text"
                placeholder="New genre... (space to add)"
                @keypress.space="addNewGenre"
              />
            </div>
          </div>
        </div>

        <div class="theater-checkbox">
          <input 
            v-model="newMovie.inTheaters"
            id="theater-checkbox" 
            class="checkbox" 
            type="checkbox"
          />
          <label for="theater-checkbox">In theaters</label>
        </div>

        <div class="form-actions">
          <button class="form-button gray" type="button" @click="closeMovieModal">Cancel</button>
          <button class="form-button blue" type="submit">{{ editMode ? "Edit" : "Create" }}</button>
        </div>
      </form>
    </div>

		<ul class="movies">
			<li 
				v-for="(movie, index) in movies" 
				:key="movie.id"
				class="movie"
        @mouseenter="hover = index"
        @mouseleave="hover = -1"
			>
        <div v-if="movie.rating > 0" class="top-right-rating">
          <StarIcon class="big-star" />
          <label>{{ movie.rating }}</label>
        </div>
				<img :src="movie.image" :alt="movie.name" crossorigin="anonymous"/>

				<div class="movie-info">
					<div class="movie-info-content">
						<h2>{{ movie.name }}</h2>

						<ul class="genres">
							<li 
								v-for="genre in movie.genres" 
								:key="genre"
								class="genre"
							>
								{{ genre }}
							</li>
						</ul>

						<p class="movie-description">{{ movie.description }}</p>
					</div>
					
					<span class="rating">
            <span style="display: flex; align-items: center; gap: 5px;">
              Rating: ({{ movie.rating }}/5) 
						
              <span class="stars">
                <StarIcon 
                  v-for="starNum in 5"
                  :key="starNum"
                  class="star-icon" 
                  :class="{
                    'star-on': movieRatings[index][starNum - 1],
                    'star-off': !movieRatings[index][starNum - 1]
                  }"
                  @click="clickable[index][starNum - 1] && rateMovie(movie.id, starNum)"
                />
              </span>
            </span>

            <div class="movie-actions" v-if="moviesHover[index]">
              <button class="icon-button edit" @click="editMovie(movie.id)">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                  <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                </svg>
              </button>
              <button class="icon-button delete" @click="deleteMovie(movie.id)">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                  <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
					</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script setup>
import { items } from "./movies.json";
import { StarIcon } from "@heroicons/vue/24/solid";
import { computed, reactive, ref } from "vue";

const movies = ref(items);
const movieRatings = computed(() => 
  movies.value.map(movie => {
    const rating = [];

    for (let i = 0; i < 5; i++) {
      if(i < movie.rating) {
        rating.push(true);
      } else {
        rating.push(false);
      }
    }

    return rating;
  })
);
const movieGenres = computed(() => {
  let allGenres = movies.value.flatMap(movie => movie.genres);

  allGenres = [...allGenres, ...newGenres.value];

  return [...new Set(allGenres)];
});
const clickable = computed(() => 
  movieRatings.value.map(ratings => {
    const clickable = [];

    for (let i = 0; i < ratings.length - 1; i++) {
      if(ratings[i] == true && ratings[i + 1] == false) {
        clickable.push(false);
      } else {
        clickable.push(true);
      }
    }

    clickable.push(true); //the last star is always clickable

    return clickable;
  })
);
const averageRating = computed(() => {
  const totalRating = movies.value.reduce((sum, movie) => sum + movie.rating, 0);
  return (totalRating / movies.value.length).toFixed(1);
});

const rateMovie = (movieId, starNum) => {
  movies.value.find(movie => movie.id == movieId).rating = starNum;
}

const displayMovieModal = ref(false);
const editMode = ref(false);
const showMovieModal = () => {
  displayMovieModal.value = true;
  editMode.value = false;
}
const closeMovieModal = () => {
  displayMovieModal.value = false;
  editMode.value = false;

  newMovie.id = '';
  newMovie.name = '';
  newMovie.description = '';
  newMovie.image = '';
  newMovie.genres = [];
  newMovie.inTheaters = false;
}

const newMovie = reactive({
  id: '',
  name: '',
  description: '',
  image: '',
  genres: [],
  inTheaters: false
});
const newGenre = ref('');
const newGenres = ref([]);
const toggleGenre = (genre) => {
  if (newMovie.genres.includes(genre)) {
    newMovie.genres = newMovie.genres.filter(g => g !== genre);
  } else {
    newMovie.genres.push(genre);
  }
}
const addNewGenre = () => {
  if (newGenre.value.trim() && !newMovie.genres.includes(newGenre.value.trim())) {
    newGenres.value.push(newGenre.value.trim());
    newGenre.value = '';
  }
}
const createMovie = () => {
  const movie = { ...newMovie };

  let highestId = 0;
  movies.value.forEach(movie => {
    if(movie.id > highestId) {
      highestId = movie.id;
    }
  });

  movie.id = highestId + 1;

  movies.value.push(movie);

  newMovie.id = '';
  newMovie.name = '';
  newMovie.description = '';
  newMovie.image = '';
  newMovie.genres = [];
  newMovie.inTheaters = false;

  newGenres.value = [];

  closeMovieModal()
}

const removeRatings = () => {
  movies.value.forEach(movie => {
    movie.rating = 0;
  });
}

const hover = ref(-1);
const moviesHover = computed(() => {
  const moviesHover = [];

  for(let i = 0; i < movies.value.length; i++) {
    if(i == hover.value) {
      moviesHover.push(true);
    } else {
      moviesHover.push(false);
    }
  }

  return moviesHover;
});

const editMovie = (movieId) => {
  const movie = movies.value.find(movie => movie.id == movieId);

  newMovie.id = movie.id;
  newMovie.name = movie.name;
  newMovie.description = movie.description;
  newMovie.image = movie.image;
  newMovie.genres = movie.genres;
  newMovie.inTheaters = movie.inTheaters;

  displayMovieModal.value = true;
  editMode.value = true;
}

const updateMovie = () => {
  const movie = movies.value.find(movie => movie.id == newMovie.id);

  movie.name = newMovie.name;
  movie.description = newMovie.description;
  movie.image = newMovie.image;
  movie.genres = newMovie.genres;
  movie.inTheaters = newMovie.inTheaters;

  newMovie.id = '';
  newMovie.name = '';
  newMovie.description = '';
  newMovie.image = '';
  newMovie.genres = [];
  newMovie.inTheaters = false;

  closeMovieModal();
}

const submitMovie = () => {
  if(editMode.value) {
    updateMovie();
  } else {
    createMovie();
  }
}

const deleteMovie = (movieId) => {
  movies.value = movies.value.filter(movie => movie.id !== movieId);
}
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

.movies-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.movies-header-info {
  display: flex;
  align-items: center;
  gap: 1em;
}

.movies-header-buttons {
  display: flex;
  align-items: center;
  gap: 1em;
}

.movie-button {
  background-color: #0095c6;
  color: #fff;
  font-size: medium;
  width: fit-content;
  border: none;
  border-radius: 5px;
  padding: 0.5em;
  cursor: pointer;

  &:hover {
    background-color: #0077a3;
  }
}

.movie-modal {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
}

.movie-form {
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  background-color: #1a2438;
  padding: 1em;
  border-radius: 5px;
  width: 30%;
}

.form-item {
  display: flex;
  flex-direction: column;
  gap: .2em;
}

.form-input {
  background-color: #111826;
  border: 2px solid #2c3c56;
  border-radius: 5px;
  color: #fff;
  padding: .2em .5em;
  width: 100%;
}

.form-text {
  min-height: 100px;
}

.checkbox {
  margin-right: .5em;
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.theater-checkbox {
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  user-select: none;
}

.theater-checkbox label {
  cursor: pointer;
}

.theater-checkbox label::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  background-color: #111826;
  border: 2px solid #2c3c56;
  border-radius: 4px;
}

.theater-checkbox input:checked + label::before {
  background-color: #0095c6;
  border-color: #0095c6;
}

.theater-checkbox input:checked + label::after {
  content: '';
  position: absolute;
  left: 7px;
  top: 3px;
  width: 6px;
  height: 12px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.form-actions {
  display: flex;
  justify-content: space-between;
}

.form-button {
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: .5em;
  cursor: pointer;
}

.gray {
  background-color: #7a7a7a;

  &:hover {
    background-color: #575757;
  }
}

.blue {
  background-color: #0095c6;

  &:hover {
    background-color: #0077a3;
  }
}

.movies {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
  list-style: none;
  padding: 0;
}

.movie {
  background-color: #1a2438;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
}

.top-right-rating {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.top-right-rating label {
  position: absolute;
  font-weight: bold;
  color: #111826;
  z-index: 1;
}

.big-star {
  height: 50px;
  width: 50px;
  fill: #e9b209;
}

.movie img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
}

.movie-info {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
}

.movie-info-content {
  margin-bottom: 20px;
}

h2 {
  margin-bottom: 10px;
  font-size: 1.5rem;
}

.genres {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  margin-bottom: 15px;
}

.genre {
  background-color: #2c3c56;
  color: #fff;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 0.8rem;
}

.movie-description {
  line-height: 1.6;
  color: #ccc;
  margin-bottom: 15px;
}

.rating {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  font-size: 0.9rem;
}

.stars {
  display: flex;
  align-items: center;
}

.star-icon {
  height: 20px;
  width: 20px;
  cursor: pointer;
}

.star-on {
  fill: #e9b209;

  &:hover {
    fill: #2c3c56;
  }
}

.star-off {
  fill: #2c3c56;

  &:hover {
    fill: #e9b209;
  }
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
  
  .movie img {
    height: 300px;
  }
}

.genre-tag {
  background-color: #2c3c56;
  color: #fff;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 0.8rem;
  margin: 4px;
  cursor: pointer;
  display: inline-block;
}

.genre-tag.selected {
  background-color: #0095c6;
}

.genres-input-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.genres-list {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.new-genre-input {
  margin-top: 5px;
}

.movie-actions {
  display: flex;
  gap: 10px;
}

.icon-button {
  border: none;
  border-radius: 50%;
  padding: .5em;
  cursor: pointer;
  background-color: #b4b4b4;
}

.edit:hover {
  background-color: #0095c6;
}

.delete:hover {
  background-color: #f07474;
}
</style>