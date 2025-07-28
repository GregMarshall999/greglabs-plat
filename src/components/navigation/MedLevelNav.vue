<template>
  <div class="navbar-content">
    <div class="logo">
      <h1
        @click="router.push('/')"
        title="Back to Home Page"
      >
        Vue JS Certification Mid Level
      </h1>
    </div>
    <ul class="nav-links">
      <li>
        <RouterLink
          :to="{ name: 'med-level-movies' }"
          class="nav-link"
        >
          Movies
        </RouterLink>
      </li>
      <li>
        <RouterLink
          :to="{ name: 'med-level-countdown' }"
          class="nav-link"
        >
          Countdown
        </RouterLink>
      </li>
      <li>
        <RouterLink
          :to="{ name: 'med-level-shopping-cart' }"
          class="nav-link"
        >
          Shopping Cart
        </RouterLink>
      </li>
      <li class="dropdown">
        <button class="nav-link dropdown-toggle">
          Other Challenges
        </button>
        <ul class="dropdown-menu">
          <li>
            <RouterLink
              :to="{ name: 'med-level-tic-tac-toe' }"
              class="nav-link"
            >
              Tic Tac Toe
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'med-level-aquarium' }"
              class="nav-link"
            >
              Aquarium
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'med-level-quiz' }"
              class="nav-link"
            >
              Quiz
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'med-level-task' }"
              class="nav-link"
            >
              Task
            </RouterLink>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router';

const router = useRouter();
</script>

<style>

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