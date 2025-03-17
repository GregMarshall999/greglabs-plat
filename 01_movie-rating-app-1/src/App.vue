<template>
	<!-- This is where your template goes	-->
	<div class="container">
		<h1>Movies</h1>

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
				<img :src="movie.image" :alt="movie.name" />

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
/*
 This is an Icon that you can use to represent the stars if you like
 otherwise you could just use a simple ⭐️ emoji, or * character.
*/
import { StarIcon } from "@heroicons/vue/24/solid";
import { computed, ref } from "vue";

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
}

h1 {
  color: #fff;
  font-size: 2rem;
  margin-bottom: 2em;
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
</style>