<template>
  <header>
    <div class="info">
      <p>Total movies: {{ movies.length }}</p>
      <p>/</p>
      <p>Average rating: {{ averageRating }}</p>
    </div>  

    <div class="actions">
      <button @click="emits('removeRatings')">
        Remove Ratings
      </button>
      <button @click="emits('addMovie')">
        Add Movie
      </button>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    movies: {
        type: Array,
        required: true
    }
});

const emits = defineEmits(['removeRatings', 'addMovie']);

const averageRating = computed(() => {
    const totalRating = props.movies.reduce((sum, movie) => sum + movie.rating, 0);
    return (totalRating / props.movies.length).toFixed(1);
});

</script>

<style scoped>

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.info, .actions {
    display: flex;
    align-items: center;
    gap: 1em;
}

button {
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

</style>
