<script lang = "ts" setup>

defineProps<{
    label: string
    id: string
    type: string
    modelValue : string
}>()

</script>

<template>
    
    <div class="input-group">
        <label :for="id" class="input-label">{{ label }}</label>
        <input 
            class="input-field"
            :type="type"
            :id="id"
            :value="modelValue"
            @input="$emit('update:model-value', ($event.target as HTMLInputElement).value)">
    </div>

</template>


