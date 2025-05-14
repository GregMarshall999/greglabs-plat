<template>
    <form @submit.prevent="checkAnswer" class="quiz-form">
        <h1>{{ quizConfig[questionIndex].question }}</h1>

        <div class="options">
            <div v-for="(option, index) in quizConfig[questionIndex].options" :key="option" class="option">
                <input 
                    type="radio" 
                    :id="'option-' + index" 
                    :value="option" 
                    v-model="selectedAnswer" 
                    name="quiz-option"
                >
                <label :for="'option-' + index">{{ option }}</label>
            </div>
        </div>
        
        <div class="result-section">
            <span v-if="answerState">{{ answerState }}</span>

            <button type="submit">Submit</button>
        </div>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { quizConfig } from '../config/quizConfig';

const questionIndex = ref(0);
const score = ref(0);
const selectedAnswer = ref();
const showResult = ref(false);

const checkAnswer = () => {
    if(showResult.value) {
        showResult.value = false;
        questionIndex.value++;
        selectedAnswer.value = null;
        return;
    }

    if(selectedAnswer.value === quizConfig[questionIndex.value].correctAnswer) {
        score.value++;
    }

    showResult.value = true;
}
</script>

<style scoped>

.quiz-form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 0 auto;
    margin-top: 10em;
    width: fit-content;
}

h1 {
    border-bottom: 1px solid #fff;
    padding: 0 .5em .5em .5em;
    margin-bottom: 1em;
}

.options {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1em;
    margin-bottom: 2em;
    padding: 0 2em;
    width: 100%;
}

.option {
    position: relative;
    padding: 0.5em 1em;
    border-radius: 4px;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: rgba(55, 109, 196, 0.493);
    }
}

input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + label {
        background-color: #3b82f6;
        border-radius: 4px;
        padding: 0.2em 0.5em;
    }
}

label {
    cursor: pointer;
    display: block;
    width: 100%;
    font-size: larger;
}

.result-section {
    display: flex;
    width: 100%;
}

button {
    margin-left: auto;
    margin-right: 0;
    background-color: #3b82f6;
    border: none;
    color: #fff;
    padding: 0.5em 1em;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #2563eb;
    }
}
</style>
