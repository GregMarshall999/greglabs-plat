<template>
	<div class="container">
		<h1>Movies</h1>

    <button class="add-movie-button" @click="showMovieModal">Add Movie</button>

    <div v-if="displayMovieModal" class="movie-modal">
      <form class="movie-form" @submit.prevent="createMovie">
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
          <button class="form-button blue" type="submit">Create</button>
        </div>
      </form>
    </div>

		<ul class="movies">
			<li 
				v-for="(movie, index) in movies" 
				:key="movie.id"
				class="movie"
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

						<p>{{ movie.description }}</p>
					</div>
					
					<span class="rating">
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

const rateMovie = (movieId, starNum) => {
  movies.value.find(movie => movie.id == movieId).rating = starNum;
}

const displayMovieModal = ref(false);
const showMovieModal = () => {
  displayMovieModal.value = true;
}
const closeMovieModal = () => {
  displayMovieModal.value = false;
}

const newMovie = reactive({
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

  movies.value.push(movie);

  newMovie.name = '';
  newMovie.description = '';
  newMovie.image = '';
  newMovie.genres = [];
  newMovie.inTheaters = false;

  newGenres.value = [];

  closeMovieModal()
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

.add-movie-button {
  background-color: #0095c6;
  color: #fff;
  font-size: medium;
  width: fit-content;
  align-self: flex-end;
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

p {
  line-height: 1.6;
  color: #ccc;
  margin-bottom: 15px;
}

.rating {
  display: flex;
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
</style>