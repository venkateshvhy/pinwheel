<script setup lang="ts">
import { ref } from "vue";
import PWButton from "~/common/PW-Button.vue";

// Track video playing state
const isVideoPlaying = ref(false);

// Function to play the video
const playVideo = () => {
  isVideoPlaying.value = true;
};
</script>

<template>
  <div class="relative">
    <!-- Main section -->
    <section class="container py-16 mx-auto">
        <div class="grid items-center px-8 pr-9 md:flex md:flex-col-reverse lg:grid lg:grid-cols-2">
        <!-- Left content -->
        <div class="space-y-6">
          <h1
            class="text-[1.92rem] md:text-[2.4rem] font-bold leading-tight heading"
          >
            Accountability that works for you
          </h1>
          <p class="text-[#888888] desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            egestas Werat viverra id et aliquet. vulputate egestas sollicitudin.
          </p>
          <PWButton label="Know About Us" />
        </div>

        <!-- Right content - Video section -->
        <div class="relative w-full group md:mb-8">
            <div v-if="isVideoPlaying" class="relative overflow-hidden rounded-2xl h-[25rem] w-full">
            <iframe
            src="https://www.youtube.com/embed/g3-VxLQO7do?autoplay=1&controls=1"
            title="YouTube video"
            class="w-full h-full"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            ></iframe>
          </div>
          <div v-else  class="relative overflow-hidden rounded-2xl">
            <img
              :src="Images.IntroThumbnailImage"
              alt="Video thumbnail"
              class="object-cover w-full h-full"
            />

            <!-- Play button with transitions -->
            <button
              class="absolute flex items-center justify-center w-16 h-16 transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 rounded-full top-1/2 left-1/2 hover:bg-orange-600 group-hover:scale-110 hover:scale-105"
                @click="playVideo"
            >
              <div class="relative">
                <div
                  class="absolute rounded-full -inset-4 bg-orange-500/30 animate-ping"
                ></div>
                <svg
                  class="w-8 h-8 text-white relative z-10 translate-x-0.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </div>
            <img v-if="!isVideoPlaying" :src="Images.CollaboratorShapeImage" alt="image" class="absolute -z-10 -right-[-1.8rem] -bottom-[-1.4rem]" style="right: -1.8rem; bottom: -1.4rem;">
          
        </div>
      </div>

      <!-- Testimonial section -->
      <div class="flex justify-between mx-8 space-y-4 md:flex-col lg:flex-row">
        <h2 class="font-bold text-[1.92rem] md:text-[2.4rem] leading-tight heading">
          Our customers have nice things to say about us
        </h2>
        <p class="text-[#888888] desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas
          Werat viverra id et aliquet. vulputate egestas sollicitudin.
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  /* max-width: 1280px; */
}

@keyframes ping {
  75%,
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

.animate-ping {
  animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
}

/* Ensure smooth transitions */
* {
  transition-property: transform, background-color, box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>
