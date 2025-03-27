<template>
    <div class="container">
        <article>
            <RatedPicture 
                :movie-rating="movie.rating"
                :movie-image="movie.image"
                :movie-name="movie.name"
            />

            <h1>{{ movie.name }}</h1>
        </article>
    </div>
</template>

<script setup>
import { items } from '../movies.json';
import { computed, ref } from 'vue';
import RatedPicture from '../components/RatedPicture.vue';

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



</style>
