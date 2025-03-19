<template>
    <li 
        class="movie"
        @mouseover="hovering = true"
        @mouseleave="hovering = false"
    >
        <div v-if="!notRated" class="top-right-rating">
            <StarIcon class="big-star" />
            <label>{{ movie.rating }}</label>
        </div>

        <img :src="movie.image" :alt="movie.name" crossorigin="anonymous"/>

        <div class="info">
            <div class="info-content">
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

                <p class="description">{{ movie.description }}</p>
            </div>

            <footer>
                <span class="rating">
                    Rating: ({{ movie.rating }}/5)
                    
                    <span class="stars">
                        <StarIcon 
                            v-for="starNum in 5"
                            :key="starNum"
                            class="star-icon"
                            :class="{
                                'star-on': movieRating[starNum - 1],
                                'star-off': !movieRating[starNum - 1]
                            }"
                            @click="clickable[starNum - 1] && emits('update-rating', movie.id, starNum)"
                        />
                    </span>
                </span>

                <div class="actions" v-if="hovering">
                    <button class="icon-button edit" @click="emits('edit', movie.id)">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                        </svg>
                    </button>
                    <button class="icon-button delete" @click="emits('remove', movie.id)">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                            <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </footer>
        </div>
    </li>
</template>

<script setup>
import { StarIcon } from "@heroicons/vue/24/solid";
import { computed, ref } from "vue";

const props = defineProps({
    movie: {
        type: Object,
        required: true
    }
});

const emits = defineEmits(["edit", "remove", "update-rating"]);

const hovering = ref(false);

const notRated = computed(() => {
    return props.movie.rating <= 0;
});

const movieRating = computed(() => {
    const rating = [];

    for (let i = 0; i < 5; i++) {
        if(i < props.movie.rating) {
            rating.push(true);
        } else {
            rating.push(false);
        }
    }

    return rating;
});

const clickable = computed(() => {
    const clickable = [];

    for(var i = 0; i < movieRating.value.length - 1; i++) {
        if(movieRating.value[i] == true && movieRating.value[i + 1] == false) {
            clickable.push(false);
        } else {
            clickable.push(true);
        }
    }

    clickable.push(true);

    return clickable;
});
</script>

<style scoped>

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

@media (max-width: 480px) {  
    .movie img {
        height: 300px;
    }
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

.big-star {
    height: 50px;
    width: 50px;
    fill: #e9b209;
}

label {
    position: absolute;
    font-weight: bold;
    color: #111826;
    z-index: 1;
}

img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    display: block;
}

.info {
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
}

.info-content {
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

.description {
    line-height: 1.6;
    color: #ccc;
    margin-bottom: 15px;
}

footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    font-size: 0.9rem;
}

.rating {
    display: flex;
    align-items: center;
    gap: 5px;
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

.actions {
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
