<template>
  <img
    src="/src/assets/med-level/aquarium/fishfood.png"
    alt="fish food"
    :style="foodStyle"
  >
</template>

<script setup>
import { computed, reactive, onMounted, ref } from 'vue';

const props = defineProps({
    foodPos: {
        type: Object,
        required: true
    }
});

const emit = defineEmits(['destroy']);

const position = reactive({ x: 0, y: 0 });
const rotation = ref(0);

const foodStyle = computed(() => ({
    position: 'absolute',
    left: `${position.x}px`,
    top: `${position.y}px`,
    transition: 'all 0.5s ease',
    transform: `scale(0.5) rotate(${rotation.value}deg)`,
    transformOrigin: 'center'
}));

const updatePosition = () => {
    position.y += 0.5;

    if(position.y > 700) {
        emit('destroy');
    }

    requestAnimationFrame(updatePosition);
}

onMounted(() => {
    position.x = props.foodPos.x - 15;
    position.y = props.foodPos.y - 15;
    rotation.value = Math.random() * 360;
    updatePosition();
});

</script>
