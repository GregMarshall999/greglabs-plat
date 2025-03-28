<template>
    <div class="container">
        <article>
            <span class="picture">
                <RatedPicture 
                    :movie-rating="movie.rating"
                    :movie-image="movie.image"
                    :movie-name="movie.name"
                />    
            </span>

            <div class="details">
                <MovieDetails :genres="movie.genres" style="height: 100%;">
                    <template #title>{{ movie.name }}</template>

                    <template #description>{{ movie.description }}</template>
                </MovieDetails>
            </div>
        </article>
    </div>
</template>

<script setup>
import { items } from '../movies.json';
import { computed, ref } from 'vue';
import RatedPicture from '../components/movies/RatedPicture.vue';
import MovieDetails from '../components/movies/MovieDetails.vue';

const props = defineProps({
    id: {
        type: String,
        required: true
    }
});

const movies = ref(items);

const movie = computed(() => {
    return movies.value.find(item => item.id == props.id);
});

</script>

<style scoped>

article {
    display: flex;
    position: relative;
}

.picture {
    position: relative;
}

.details {
    display: flex;
    justify-content: center;
}

</style>
