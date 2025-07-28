<template>
    <li 
        class="movie"
        @mouseover="hovering = true"
        @mouseleave="hovering = false"
    >
        <RatedPicture 
            :movie-rating="movie.rating"
            :movie-image="movie.image"
            :movie-name="movie.name"
        />

        <MovieDetails :genres="movie.genres">
            <template #title>{{ movie.name }}</template>
            <template #description>{{ movie.description }}</template>

            <template #default>
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
                        <RouterLink 
                            :to="{ name: 'med-level-movie-details', params: { id: movie.id } }"
                            class="icon-button view"
                        >
                            <svg fill="#000000" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"/>
                            </svg>
                        </RouterLink>
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
            </template>
        </MovieDetails>
    </li>
</template>

<script setup>
import { StarIcon } from "@heroicons/vue/24/solid";
import RatedPicture from "./RatedPicture.vue";
import MovieDetails from "./MovieDetails.vue";
import { computed, ref } from "vue";

const props = defineProps({
    movie: {
        type: Object,
        required: true
    }
});

const emits = defineEmits(["edit", "remove", "update-rating"]);

const hovering = ref(false);

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
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
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
    display: flex;
    justify-content: center;
    align-items: center;
}

.view:hover {
    background-color: #e9b209;
}

.edit:hover {
    background-color: #0095c6;
}

.delete:hover {
    background-color: #f07474;
}

</style>
