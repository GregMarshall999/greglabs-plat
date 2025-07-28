<template>
  <div class="form-item">
    <label><slot /></label>
    <div class="tags-input-container">
      <div class="tags-list">
        <span
          v-for="tag in availableTags"
          :key="tag"
          class="tag-item"
          :class="{ 'selected': modelValue.includes(tag) }"
          @click="toggleTag(tag)"
        >
          {{ tag }}
        </span>
      </div>

      <div class="new-tag-input">
        <input 
          v-model="newTag"
          class="form-input"
          type="text"
          placeholder="New tag... (space to add)"
          @keypress.space="addNewTag"
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    tags: {
        type: Array,
        default: () => []
    }
});

const modelValue = defineModel({ required: true, type: Array });

const newTag = ref('');
const newTags = ref([]);

const availableTags = computed(() => {
    let allTags = [...props.tags, ...newTags.value];
    return [...new Set(allTags)];
});

const toggleTag = tag => {
    if (modelValue.value.includes(tag)) {
        modelValue.value = modelValue.value.filter(t => t !== tag);
    } else {
        modelValue.value.push(tag);
    }
};

const addNewTag = () => {
    if (newTag.value.trim() && !availableTags.value.includes(newTag.value)) {
        newTags.value.push(newTag.value);
        newTag.value = '';
    }
};

</script>

<style scoped>

.form-item {
    display: flex;
    flex-direction: column;
    gap: .2em;
}

.tags-input-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.tags-list {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}

.tag-item {
    background-color: #2c3c56;
    color: #fff;
    padding: 4px 12px;
    border-radius: 999px;
    font-size: 0.8rem;
    margin: 4px;
    cursor: pointer;
    display: inline-block;
}

.tag-item.selected {
    background-color: #0095c6;
}

.new-tag-input {
    margin-top: 5px;
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
