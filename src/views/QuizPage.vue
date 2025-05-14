<template>
    <form @submit.prevent="submitForm" class="quiz-form">
        <div v-if="questionIndex < quizConfig.length" class="progress-bar">
            <div class="progress-fill" :style="{ width: `${(questionIndex / quizConfig.length) * 100}%` }"></div>
        </div>

        <h1 v-if="questionIndex < quizConfig.length">{{ quizConfig[questionIndex].question }}</h1>
        <h1 v-else>Your final score:</h1>

        <div v-if="questionIndex < quizConfig.length" class="options">
            <div v-for="(option, index) in quizConfig[questionIndex].options" :key="option" class="option">
                <input 
                    type="radio" 
                    :id="'option-' + index" 
                    :value="option" 
                    v-model="selectedAnswer" 
                    name="quiz-option"
                >
                <label 
                    :for="'option-' + index" 
                    :class="{ 'correct': showResult && quizConfig[questionIndex].correctAnswer === option, 'incorrect': showResult && quizConfig[questionIndex].correctAnswer !== option }"
                >
                    {{ option }} 
                    <span v-if="showResult && quizConfig[questionIndex].correctAnswer === option">✓</span>
                    <span v-else-if="showResult && quizConfig[questionIndex].correctAnswer !== option">✗</span>
                </label>
            </div>
        </div>
        <div v-else class="options">
            {{ score }} / {{ quizConfig.length }}
        </div>
        
        <div class="result-section">
            <p 
                v-if="answerState" 
                :class="{ 'correct': answerState === 'Correct', 'incorrect': answerState === 'Incorrect' }"
            >
                {{ answerState }} !
            </p>

            <button v-if="questionIndex < quizConfig.length" type="submit">{{ showResult ? 'Next' : 'Submit' }}</button>
            <button v-else type="submit">Restart</button>
        </div>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { quizConfig } from '../config/quizConfig';

const questionIndex = ref(0);
const score = ref(0);
const selectedAnswer = ref(null);
const showResult = ref(false);
const answerState = ref(null);

const submitForm = () => {
    if(questionIndex.value === quizConfig.length) {
        questionIndex.value = 0;
        score.value = 0;
        return;
    }

    if(showResult.value) {
        nextQuestion();
        return;
    }
    
    checkAnswer();
}

const nextQuestion = () => {
    questionIndex.value++;
    showResult.value = false;
    answerState.value = null;
}

const checkAnswer = () => {
    if(selectedAnswer.value === quizConfig[questionIndex.value].correctAnswer) {
        score.value++;
        answerState.value = 'Correct';
    }
    else {
        answerState.value = 'Incorrect';
    }

    selectedAnswer.value = null;
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
    }
}

label {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: larger;
    border-radius: 4px;
    padding: 0.2em 0.5em;
}

.result-section {
    display: flex;
    width: 100%;
}

p {
    margin-left: 1em;
    margin-right: 1em;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    border-radius: 4px;
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

.correct {
    background-color: #16a34a;
}

.incorrect {
    background-color: #dc2626;
}

.progress-bar {
    width: 100%;
    height: 20px;
    background-color: #1e293b;
    border-radius: 10px;
    margin-bottom: 2em;
    position: relative;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background-color: #3b82f6;
    transition: width 0.3s ease;
}

.progress-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 0.8em;
    font-weight: bold;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
}
</style>
