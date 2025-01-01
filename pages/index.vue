<script setup lang="ts">
import Carosol from '../components/Carosol.vue';

useHead({
    title: 'Pinwheel-tailwind'
})
</script>
<template>
    <div class="relative">
        <nav-bar></nav-bar>
        <download-theme-content></download-theme-content>
        <features></features>
        <highlight-section></highlight-section>
        <video-testimonial></video-testimonial>
        <Carosol></Carosol>
        <hero-section></hero-section>
    </div>
</template>


<style scoped>

</style>