<template>
    <div class="checkbox-container">
        <input 
            v-model="modelValue"
            class="checkbox"
            type="checkbox"
            :id="id"
        />
        <label :for="id"><slot></slot></label>
    </div>
</template>

<script setup>
const props = defineProps({
    id: {
        type: String,
        required: true
    }
});

const modelValue = defineModel({ required: true });
</script>

<style scoped>

.checkbox {
    margin-right: .5em;
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.checkbox-container {
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 35px;
    cursor: pointer;
    user-select: none;
}

.checkbox-container label {
    cursor: pointer;
}

.checkbox-container label::before {
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

.checkbox-container input:checked + label::before {
    background-color: #0095c6;
    border-color: #0095c6;
}

.checkbox-container input:checked + label::after {
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
</style>
