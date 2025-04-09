<template>
    <nav class="navbar">
        <div class="container">
            <div class="navbar-content">
                <div class="logo">
                    <h1>Vue JS Certification Mid Level</h1>
                </div>
                <ul class="nav-links">
                    <li><RouterLink to="/" class="nav-link">Movies</RouterLink></li>
                    <li><RouterLink to="/countdown" class="nav-link">Countdown</RouterLink></li>
                    <li><RouterLink to="/shopping-cart" class="nav-link">Shopping Cart</RouterLink></li>
                    <li><RouterLink to="/custom-directive" class="nav-link">Custom Directive</RouterLink></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
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
}

.nav-links {
    display: flex;
    list-style: none;
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
</style>
