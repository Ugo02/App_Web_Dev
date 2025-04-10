
<script lang="ts" setup>
import {ref} from 'vue'
import BasicInput from './BasicInput.vue';
import { postJSON } from './api-client/api-client';
import config from '../config.js';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('')
const password = ref('')

async function onSubmit(e: Event) {
    try {
        const response = await postJSON(`${config.apiBaseURL}/api/token`, {
            username: username.value,
            password: password.value
        });
        
        localStorage.setItem('token', response.token);
        router.push('/movies');
                
    } catch (error) {
        console.error("Login failed:", error);
        alert("Login failed. Please check your credentials.");
    }
}

</script>

<template>
    <form class="auth-form" @submit.prevent="onSubmit($event)">
        <fieldset>
            <legend>Please fill in the form</legend>
            <BasicInput 
                id = "username"
                type = "text"
                label = "Username"
                v-model = "username"
            />
            <BasicInput 
                id = "password"
                type = "password"
                label = "Password"
                v-model = "password"
            />
            <input type="submit" class="submit-button" value="Log in">
        </fieldset>
    </form>
</template>