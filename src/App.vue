<template>
  <NavigationBar />
  <RouterView />
  <AppFooter />
</template>

<script setup>
import NavigationBar from './components/navigation/NavigationBar.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<style>

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	background-color: #111826;
	font-family: 'Manrope', sans-serif;
	color: #fff;
}

.container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 20px;
	display: flex;
	flex-direction: column;
	gap: 2em;
}

</style>