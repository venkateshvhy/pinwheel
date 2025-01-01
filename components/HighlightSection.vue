<script lang="ts" setup>
import { ref } from "vue";

// Reactive variable to track the selected highlight
const selectedHighlight = ref<string | null>("habit-building");

// Function to handle click event and set the selected highlight
const handleHighlightClick = (highlight: string) => {
  selectedHighlight.value = highlight;
};
</script>

<template>
  <div class="flex flex-col highlight-section">
    <div class="flex flex-col-reverse lg:flex-row lg:px-8">
    <!-- <div class="flex flex-row justify-between md:flex-col-reverse lg:px-8"> -->
      <!-- Left Section: Text Content -->
      <div class="text-content">
        <h1 class="leading-10 title heading text-[1.92rem] md:text-[2.4rem]">
          Prevent failure from impacting your reputation
        </h1>
        <p class="description desc">
          Our platform helps you build secure onboarding authentication
          experiences that retain and engage your users. We build the
          infrastructure, you can.
        </p>

        <div class="md:-ml-8 lg:ml-0 highlights">
          <div
            :class="[
              'md:!pl-8 lg:!pl-2 highlight',
              selectedHighlight === 'habit-building' ? 'highlight-primary' : '',
            ]"
            @click="handleHighlightClick('habit-building')"
          >
            <span class="icon" style="color: #fe6019">🔥</span>
            <span class="text desc text-line"
              >Habit building essential choose habit</span
            >
          </div>
          <div
            :class="[
              'md:!pl-8 lg:!pl-2 highlight',
              selectedHighlight === 'overview' ? 'highlight-primary' : '',
            ]"
            @click="handleHighlightClick('overview')"
          >
            <span class="icon">🧭</span>
            <span class="text desc text-line"
              >Get an overview of Habit Calendars.</span
            >
          </div>
          <div
            :class="[
              'md:!pl-8 lg:!pl-2 highlight',
              selectedHighlight === 'start-building' ? 'highlight-primary' : '',
            ]"
            @click="handleHighlightClick('start-building')"
          >
            <span class="icon">⏳</span>
            <span class="text desc text-line"
              >Start building with Habitify platform</span
            >
          </div>
        </div>
      </div>

      <!-- Right Section: Visualization -->
      <div class="visualization">
        <div class="map-section">
          <img
            src="../assets/img/worldmap.png"
            alt="Sales by Country"
            class="object-contain w-full"
          />
        </div>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row lg:px-8">
    <!-- <div class="flex justify-between px-6 lg:items-center lg:flex-row md:flex-col"> -->
      <!-- Left Section: Cards -->
      <div class="relative">
        <img
          src="../assets/img/collaborator.png"
          alt="Add Collaborators"
          class="object-contain w-full"
        />
        <img src="../assets/img/collaborator-shap.svg" alt="" class="absolute bottom-6 left-1/2 -z-[1] -translate-x-1/2">
      </div>

      <!-- Right Section: Text Content -->
      <div class="max-w-md">
        <h1 class="mb-4 text-[1.92rem] md:text-[2.4rem] font-bold leading-10 title heading">
          Accept payments any country in this whole universe
        </h1>
        <p class="mb-6 description desc">
          Donec sollicitudin molestie malesda. Donec sollicitudin molestie
          malesuada. Mauris pellentesque nec, egestas non nisi. Cras ultrices
          ligula sed.
        </p>
        <ul class="space-y-3">
          <li class="flex items-center gap-4 text-gray-700">
            <div
              class="bg-[#ff8a55] rounded-full flex items-center justify-center"
              style="width: 22px; height: 22px"
            >
              <Icon
                name="heroicons:check-20-solid"
                style="color: #ffff"
                size="16"
              />
            </div>
            <p class="desc text-line">Supporting more than 119 country world</p>
          </li>
          <li class="flex items-center gap-4 text-gray-700">
            <div
              class="bg-[#ff8a55] rounded-full flex items-center justify-center"
              style="width: 22px; height: 22px"
            >
              <Icon
                name="heroicons:check-20-solid"
                style="color: #ffff"
                size="16"
              />
            </div>
            <p class="desc text-line">Open transaction with more than currencies</p>
          </li>
          <li class="flex items-center gap-4 text-gray-700">
            <div
              class="bg-[#ff8a55] rounded-full flex items-center justify-center"
              style="width: 22px; height: 22px"
            >
              <Icon
                name="heroicons:check-20-solid"
                style="color: #ffff"
                size="16"
              />
            </div>
            <p class="desc text-line">Customer Service with 79 languages</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.highlight-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
}

.content {
  display: flex;
  width: 100%;
  margin: 0 auto;
}

.text-content {
  flex: 1;
  padding-right: 2rem;
}

.text-line {
  font-size: 1rem;
  color: #222222;
  opacity: 1;
}

.title {
  font-weight: bold;
  margin-bottom: 1rem;
}

.description {
  font-size: 1.1rem;
  color: #6b7280;
  margin-bottom: 2rem;
}

.highlights {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.highlight {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: #374151;
}

.highlight-primary {
  background-color: #fe601966;
  padding: 0.875rem;
  border-radius: 0.25rem;
  /* font-weight: bold; */
  /* color: #d97706; */
}

.visualization {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.map-section {
  width: 100%;
  margin-bottom: 1rem;
}

.map-image {
  width: 100%;
  max-width: 500px;
  border-radius: 0.5rem;
}

.data-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.data-item {
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
}
</style>
