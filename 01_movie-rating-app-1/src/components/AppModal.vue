<template>
    <div class="modal-background">
        <div class="modal">
            <h2>
                <slot name="title"></slot>
            </h2>

            <form @submit.prevent="emits('submit')">
                <slot></slot>

                <div class="form-actions">
                    <button 
                        class="form-button gray" 
                        type="button" 
                        @click="emits('close')"
                    >
                        <slot name="close-button">X</slot>
                    </button>
                    <button 
                        class="form-button blue" 
                        type="submit"
                    >
                        <slot name="submit-button">Submit</slot>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
const emits = defineEmits(['close', 'submit']);
</script>

<style scoped>

.modal-background {
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

.modal {
    display: flex;
    flex-direction: column;
    width: 30%;
    background-color: #111826;
    border-radius: 5px;
    
}

h2 {
    margin: .5em;
}

form {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    background-color: #1a2438;
    padding: 1em;
    border-radius: 5px;
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
