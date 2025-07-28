<template>
  <div class="form-item">
    <label><slot /></label>
    <input 
      v-model="modelValue"
      class="form-input"
      type="text"
      :required="required"
      ref="focusInput"
    >
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
    required: {
        type: Boolean,
        default: false
    }, 
    focus: {
        type: Boolean,
        default: false
    }
});

const modelValue = defineModel({ 
    required: true, 
    type: String
});


const focusInput = ref(null);

onMounted(() => {
    if (props.focus) {
        focusInput.value.focus();
    }
});
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

</style>
