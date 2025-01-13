<script setup lang="ts">
import { ref, onMounted } from "vue";
import { GetPageContent } from "~/services/home";

const firstHighlight = ref();
const secondHighlight = ref();

// Icon mapping
const iconMap: any = {
  1: "🔥",
  2: "🧭",
  3: "⏳",
};

onMounted(async () => {
  const firstHightlightResult = await GetPageContent("prevent");
  firstHighlight.value = firstHightlightResult.data[0];
  const secondHighlightResult = await GetPageContent("payments");
  secondHighlight.value = secondHighlightResult.data[0];
});

// Reactive variable to track the selected highlight
const selectedHighlight = ref<any>(1);

// Function to handle click event and set the selected highlight
const handleHighlightClick = (highlight: string) => {
  selectedHighlight.value = highlight;
};
</script>

<template>
  <section class="pt-16">
    <div class="container">
      <div class="flex flex-col-reverse items-center lg:flex-row">
        <!-- Left Section: Text Content -->
        <div class="basis-5/12">
          <div class="text-container">
            <h1
              class="leading-10 title heading text-[1.92rem] md:text-[2.3rem]"
            >
              {{ firstHighlight?.heading }}
            </h1>
            <p class="description desc">
              {{ firstHighlight?.description }}
            </p>

            <div class="md:-ml-8 lg:ml-0 highlights">
              <div
                v-for="highlight in firstHighlight?.properties"
                :key="highlight.id"
                :class="[
                  'md:!pl-8 lg:!pl-2 highlight',
                  selectedHighlight === highlight.id ? 'highlight-primary' : '',
                ]"
                @click="handleHighlightClick(highlight.id)"
              >
                <span
                  class="icon"
                  :style="{ color: highlight.color || '#000' }"
                >
                  {{ iconMap[highlight.id] || "❓" }}
                </span>
                <span class="text desc text-line">{{ highlight.label }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Section: Visualization -->
        <div class="mx-6 basis-7/12 visualization">
          <div class="map-section">
            <img
              :src="Images.WorldMapImage"
              alt="Sales by Country"
              class="object-contain w-full"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center lg:flex-row">
        <!-- Left Section: Cards -->
        <div class="relative basis-7/12">
          <img
            :src="Images.CollaboratorImage"
            alt="Add Collaborators"
            class="object-contain w-full"
          />
          <img
            :src="Images.CollaboratorShapeImage"
            alt="image"
            class="absolute bottom-6 left-1/2 -z-[1] -translate-x-1/2"
          />
        </div>

        <!-- Right Section: Text Content -->
        <div class="basis-5/12">
          <div class="text-container">
            <h1
              class="mb-4 text-[1.92rem] md:text-[2.4rem] font-bold leading-10 title heading"
            >
              {{ secondHighlight?.heading }}
            </h1>
            <p class="mb-6 description desc">
              {{ secondHighlight?.description }}
            </p>
            <ul class="space-y-3">
              <li
                v-for="(feature, index) in secondHighlight?.properties"
                :key="index"
                class="flex items-center gap-4 text-gray-700"
              >
                <div
                  class="bg-[#ff8a55] rounded-full flex items-center justify-center"
                  style="width: 22px; height: 22px"
                >
                  <Icon
                    name="heroicons:check-20-solid"
                    style="color: var(--white-color)"
                    size="16"
                  />
                </div>
                <p class="desc text-line">{{ feature.label }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
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

@media (min-width: 1024px) {
  .text-container {
    max-width: 412px;
  }
}
.text-container {
  margin-left: auto;
  margin-right: auto;
}

.text-line {
  font-size: 1rem;
  color: var(--primary-color);
  opacity: 1;
}

.title {
  font-weight: bold;
  margin-bottom: 1rem;
}

.description {
  font-size: 1rem;
  color: #6b7280;
  margin-bottom: 2rem;
}

.highlights {
  display: inline-block;
  flex-direction: column;
  gap: 1rem;
}

.highlight {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: #374151;
  margin-bottom: 1rem;
}

/* .highlight:active {
  background-color: #fe601966;
  padding: 0.875rem;
  border-radius: 0.25rem;
} */

.highlight-primary {
  background-color: #fe601966;
  padding: 0.875rem;
  border-radius: 0.25rem;
  /* font-weight: bold; */
  /* color: #d97706; */
}

.visualization {
  /* flex: 1; */
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
