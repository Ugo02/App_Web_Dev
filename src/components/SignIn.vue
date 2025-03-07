
<script lang="ts" setup>
import {ref} from 'vue'
import BasicInput from './BasicInput.vue';
import { postJSON } from './api-client/api-client';

const username = ref('')
const password = ref('')

function onSubmit(e:Event){
    // e.preventDefault() le .prevent dérrière submit fait la même chose
    postJSON("/api/token", {
        username : username.value,
        password : password.value,
    })
}

</script>

<template>
    <form id="login"
    @submit.prevent="onSubmit($event)">
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
                type = "text"
                label = "Password"
                v-model = "password"
            />
            <input type="submit" value="Log in">
        </fieldset>
    </form>
</template>