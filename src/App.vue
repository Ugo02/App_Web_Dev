<script setup>
import AppHeader from './components/AppHeader.vue';
import { RouterView } from 'vue-router';
</script>

<template>
    <div class="app-container">
        <AppHeader />
        <main class="main-content">
            <RouterView />
        </main>
    </div>
</template>
