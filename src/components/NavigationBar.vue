<template>
    <nav class="navbar">
        <div class="container">
            <div class="navbar-content">
                <div class="logo">
                    <h1 @click="router.push('/')">Vue JS Certification Mid Level</h1>
                </div>
                <ul class="nav-links">
                    <li><RouterLink to="/movies" class="nav-link">Movies</RouterLink></li>
                    <li><RouterLink to="/countdown" class="nav-link">Countdown</RouterLink></li>
                    <li><RouterLink to="/shopping-cart" class="nav-link">Shopping Cart</RouterLink></li>
                    <li class="dropdown">
                        <button class="nav-link dropdown-toggle">Other Challenges</button>
                        <ul class="dropdown-menu">
                            <li><RouterLink to="/custom-directive" class="nav-link">Custom Directive</RouterLink></li>
                            <li><RouterLink to="/tic-tac-toe" class="nav-link">Tic Tac Toe</RouterLink></li>
                            <li><RouterLink to="/aquarium" class="nav-link">Aquarium</RouterLink></li>
                            <li><RouterLink to="/quiz" class="nav-link">Quiz</RouterLink></li>
                            <li><RouterLink to="/task" class="nav-link">Task</RouterLink></li>
                            <li><RouterLink to="/profil" class="nav-link">Profil</RouterLink></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router';

const router = useRouter();
</script>

<style scoped>
.navbar {
    background-color: #1a2434;
    padding: 1rem 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.navbar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
}

.nav-links {
    display: flex;
    list-style: none;
    align-items: center;
    gap: 1.5rem;
}

.nav-link {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 0.75rem;
    border-radius: 4px;
    transition: background-color 0.2s, color 0.2s;
}

.nav-link:hover, .router-link-active {
    background-color: #2d3748;
    color: #38b2ac;
}

.dropdown {
    position: relative;
    z-index: 1000;
}

.dropdown-toggle {
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    padding: 0.5rem 0.75rem;
}

.dropdown-menu {
    list-style: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #1a2434;
    border-radius: 4px;
    padding: 0.5rem 0;
    min-width: 200px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    transition: opacity 0.2s, visibility 0.2s, transform 0.2s;
}

.dropdown:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.dropdown-menu .nav-link {
    display: block;
    padding: 0.5rem 1rem;
    white-space: nowrap;
}

.dropdown-menu .nav-link:hover {
    background-color: #2d3748;
}
</style>
