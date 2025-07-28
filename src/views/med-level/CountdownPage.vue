<template>
    <div class="container">
        <div class="countdown-container">
            <CountdownHeader />
            <div class="countdown-segment-container">
                <CountdownSegment label="Days" :number="days" />
                <CountdownSegment label="Hours" :number="hours" />
                <CountdownSegment label="Minutes" :number="minutes" />
                <CountdownSegment label="Seconds" :number="seconds" />
            </div>
        </div>
    </div>
</template>

<script setup>
import CountdownHeader from '@/components/med-level/countdown/CountdownHeader.vue';
import CountdownSegment from '@/components/med-level/countdown/CountdownSegment.vue';
import { ref, onUnmounted } from 'vue';

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

// Calculate the next year's first day
const currentYear = new Date().getFullYear();
const nextYear = currentYear + 1;
const newYearsDate = new Date(`January 1, ${nextYear} 00:00:00`);

// Update the countdown every second
const updateCountdown = () => {
  const currentTime = new Date();
  const diff = newYearsDate - currentTime;

  // Calculate days, hours, minutes, seconds
  days.value = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes.value = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((diff % (1000 * 60)) / 1000);
};

// Initial call and set interval
updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);

// Clean up interval when component is unmounted
onUnmounted(() => {
  clearInterval(countdownInterval);
});


</script>

<style scoped>

.countdown-container {
    background-color: #fff;
    color: #000;
    width: fit-content;
    align-self: center;
    padding: 2em 1em;
    border-radius: 1em;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 1em;
}

.countdown-segment-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
