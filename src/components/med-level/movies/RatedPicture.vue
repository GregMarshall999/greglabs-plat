<template>
    <div v-if="!notRated" class="top-right-rating">
        <StarIcon class="big-star" />
        <label>{{ movieRating }}</label>
    </div>

    <img :src="movieImage" :alt="movieName" crossorigin="anonymous"/>
</template>

<script setup>
import { StarIcon } from "@heroicons/vue/24/solid";
import { computed } from "vue";

const props = defineProps({
    movieRating: {
        type: Number,
        required: true
    }, 
    movieImage: {
        type: String,
        required: true
    },
    movieName: {
        type: String,
        required: true
    }
});

const notRated = computed(() => {
    return props.movieRating <= 0;
});

</script>

<style scoped>

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

@media (max-width: 480px) {  
    img {
        height: 300px;
    }
}

</style>