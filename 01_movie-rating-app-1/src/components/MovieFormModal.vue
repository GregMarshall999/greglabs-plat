<template>
    <div class="modal" v-if="movieModel">
        <form @submit.prevent="emits('submit')">
            <div class="form-item">
                <label>Name</label>
                <input 
                    v-model="movieModel.name"
                    class="form-input"
                    type="text"
                    required
                />
            </div>

            <div class="form-item">
                <label>Description</label>
                <textarea 
                    v-model="movieModel.description"
                    class="form-input form-text"
                ></textarea>
            </div>
            
            <div class="form-item">
                <label>Image</label>
                <input 
                    v-model="movieModel.image"
                    class="form-input"
                    type="text"
                    required
                />
            </div>

            <div class="form-item">
                <label>Genres</label>
                <div class="genres-input-container">
                    <div class="genres-list">
                        <span 
                            v-for="genre in movieGenres" 
                            :key="genre"
                            class="genre-tag"
                            :class="{ 'selected': movieModel.genres.includes(genre) }"
                            @click="toggleGenre(genre)"
                        >
                            {{ genre }}
                        </span>
                    </div>
                    
                    <div class="new-genre-input">
                        <input 
                            v-model="newGenre" 
                            class="form-input" 
                            type="text"
                            placeholder="New genre... (space to add)"
                            @keypress.space="addNewGenre"
                        />
                    </div>
                </div>
            </div>

            <div class="theater-checkbox">
                <input 
                    v-model="movieModel.inTheaters"
                    id="theater-checkbox" 
                    class="checkbox" 
                    type="checkbox"
                />
                <label for="theater-checkbox">In theaters</label>
            </div>

            <div class="form-actions">
                <button class="form-button gray" type="button" @click="emits('close')">Cancel</button>
                <button class="form-button blue" type="submit">{{ editMode ? "Edit" : "Create" }}</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const movieModel = defineModel();

const props = defineProps({
    movies: {
        type: Array,
        required: true
    }, 
    editMode: {
        type: Boolean,
        default: false
    }
});

const emits = defineEmits(['close', 'submit']);

const newGenre = ref('');
const newGenres = ref([]);

const movieGenres = computed(() => {
    let allGenres = props.movies.flatMap(movie => movie.genres);

    allGenres = [...allGenres, ...newGenres.value];

    return [...new Set(allGenres)];
});

const toggleGenre = genre => {
    if (movieModel.value.genres.includes(genre)) {
        movieModel.value.genres = movieModel.value.genres.filter(g => g !== genre);
    } else {
        movieModel.value.genres.push(genre);
    }
}

const addNewGenre = () => {
    if (newGenre.value.trim() && !movieGenres.value.includes(newGenre.value.trim())) {
        newGenres.value.push(newGenre.value.trim());
        newGenre.value = '';
    }
}

</script>

<style scoped>

.modal {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
}

form {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    background-color: #1a2438;
    padding: 1em;
    border-radius: 5px;
    width: 30%;
}

.form-item {
    display: flex;
    flex-direction: column;
    gap: .2em;
}

.form-input {
    background-color: #111826;
    border: 2px solid #2c3c56;
    border-radius: 5px;
    color: #fff;
    padding: .2em .5em;
    width: 100%;
}

.form-text {
     min-height: 100px;
}

.genre-tag {
    background-color: #2c3c56;
    color: #fff;
    padding: 4px 12px;
    border-radius: 999px;
    font-size: 0.8rem;
    margin: 4px;
    cursor: pointer;
    display: inline-block;
}

.genre-tag.selected {
     background-color: #0095c6;
}

.genres-input-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.genres-list {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}

.new-genre-input {
    margin-top: 5px;
}

.checkbox {
    margin-right: .5em;
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.theater-checkbox {
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 35px;
    cursor: pointer;
    user-select: none;
}

.theater-checkbox label {
     cursor: pointer;
}

.theater-checkbox label::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    background-color: #111826;
    border: 2px solid #2c3c56;
    border-radius: 4px;
}

.theater-checkbox input:checked + label::before {
    background-color: #0095c6;
    border-color: #0095c6;
}

.theater-checkbox input:checked + label::after {
    content: '';
    position: absolute;
    left: 7px;
    top: 3px;
    width: 6px;
    height: 12px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}

.form-actions {
    display: flex;
    justify-content: space-between;
}

.form-button {
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: .5em;
    cursor: pointer;
}

.gray {
    background-color: #7a7a7a;

    &:hover {
        background-color: #575757;
    }
}

.blue {
    background-color: #0095c6;

    &:hover {
        background-color: #0077a3;
    }
}

</style>
