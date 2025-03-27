<template>
    <div class="details">
        <div class="details-content">
            <h2><slot name="title"></slot></h2>

            <ul class="genres">
                <li 
                    v-for="genre in genres" 
                    :key="genre"
                    class="genre"
                >
                    {{ genre }}
                </li>
            </ul>

            <p class="description"><slot name="description"></slot></p>
        </div>

        <slot></slot>
    </div>
</template>

<script setup>

const props = defineProps({
    genres: {
        type: Array,
        required: true
    }
});

</script>

<style scoped>

.details {
    background-color: #1a2438;
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
}

.details-content {
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

</style>
