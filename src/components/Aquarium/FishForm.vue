<template>
    <form class="fish-form">
        <h3>{{ formMessage }}</h3>

        <div class="fish-selection">
            <div v-for="(fish, type) in fishes" :key="type">
                <img :src="fish.image" :alt="type" />
                <span>{{ fish.name }}</span>
            </div>
        </div>
    </form>
</template>

<script setup>
import { ref } from 'vue';

const messages = [
    'Select a fish:'
]

const formMessage = ref(messages[0]);
</script>
