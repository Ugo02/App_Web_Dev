<script lang="ts" setup>
import {ref} from 'vue'
import BasicInput from './BasicInput.vue';
import { postJSON } from './api-client/api-client';
import config from '../config';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('')
const password = ref('')
const email = ref('')

async function onSubmit(e: Event) {
    try {
        await postJSON(`${config.apiBaseURL}/api/users`, {
            username: username.value,
            password: password.value,
            email: email.value
        });

        const loginResponse = await postJSON(`${config.apiBaseURL}/api/token`, {
            username: username.value,
            password: password.value
        });

        localStorage.setItem('token', loginResponse.token);
        router.push('/movies');
        
    } catch (error) {
        console.error("Registration failed:", error);
        alert("Registration failed. The username or email may already exist.");
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
                id = "Email"
                type = "email"
                label = "email"
                v-model = "email"
            />
            <BasicInput 
                id = "password"
                type = "password"
                label = "Password"
                v-model = "password"
            />
            <input type="submit" class="submit-button" value="Sign Up">
        </fieldset>
    </form>
</template>
