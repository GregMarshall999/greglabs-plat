<template>
    <div class="form-item">
        <label><slot></slot></label>
        <textarea 
            v-model="modelValue"
            class="form-input form-text"
            :required="required"
        ></textarea>
    </div>
</template>

<script setup>
const props = defineProps({
    required: {
        type: Boolean,
        default: false
    }
});

const modelValue = defineModel({ required: true });
</script>

<style scoped>

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

</style>
