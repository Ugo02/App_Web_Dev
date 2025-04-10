<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { postJSON, getJSON } from './api-client/api-client';
import BasicInput from './BasicInput.vue';
import config from '../config.js';

const movieName = ref('');
const rating = ref(0);
const movies = ref([]);

async function loadMovies() {
    try {
        const token = localStorage.getItem('token');
       
        const response = await getJSON(`${config.apiBaseURL}/api/movies`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        movies.value = response;

    } catch (error) {
        console.error("Erreur chargement films:", error);
        alert("Veuillez vous reconnecter");
        localStorage.removeItem('token');
    }
}

async function onSubmit(e: Event) {
    e.preventDefault();
    if (!movieName.value.trim() || rating.value < 1) return;

    try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error('No token found');

        await postJSON(`${config.apiBaseURL}/api/movies`, {
            name: movieName.value,
            rating: rating.value
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        await loadMovies();
        movieName.value = '';
        rating.value = 0;
    } catch (error) {
        console.error("Erreur ajout film:", error);
        alert(`Erreur: ${error.message}`);
    }
}

onMounted(() => {
    loadMovies();
});
</script>

<template>
    <div class="movie-rating-container">
        <form class="movie-form" @submit.prevent="onSubmit($event)">
            <fieldset>
                <legend>Rate a Movie</legend>
                <div class="movie-rating-container">
                    <BasicInput 
                        id="movieName"
                        type="text"
                        label="Movie Name"
                        v-model="movieName"
                        class="movie-input"
                    />
                    <div class="stars-container">
                        <div class="stars">
                            <span 
                                v-for="i in 5" 
                                :key="i"
                                class="star"
                                :class="{ 'filled': i <= rating }"
                                @click="rating = i"
                            >
                                ★
                            </span>
                        </div>
                    </div>
                </div>
                <input type="submit" class="submit-button" value="Submit Rating">
            </fieldset>
        </form>

        <div class="movie-list">
            <h2>Rated Movies</h2>
            <ul>
                <li v-for="movie in movies" :key="movie.id" class="movie-item">
                    <span class="movie-name">{{ movie.name }}</span>
                    <span class="movie-rating">
                        <span 
                            v-for="i in 5" 
                            :key="i"
                            class="star"
                            :class="{ 'filled': i <= movie.rating }"
                        >
                            ★
                        </span>
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

