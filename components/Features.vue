<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { GetPageContent } from '~/services/home';

const options = ref();
const highlightContent = ref()

onMounted(async () => {
  const resultData = await GetPageContent('highlight')
  highlightContent.value = resultData.data[0]
  const featuresData = await GetPageContent('feature');
  options.value = featuresData.data;
})
</script>

<template>
  <div class="relative py-16">
    <img
      :src="Images.FeatureShapeImage"
      alt="image"
      class="absolute left-0 top-0 -z-[1] -translate-y-1/2"
    />
    <div class="container">
      <!-- Heading Section -->
      <div class="flex flex-col justify-between lg:flex-row">
        <div class="lg:basis-2/5">
          <h2
            class="text-[1.9rem] font-bold md:text-[2.4rem] heading text-center lg:text-start leading-tight"
          >
            {{ highlightContent?.heading }}
          </h2>
        </div>
        <div class="lg:basis-2/5">
          <p class="text-[var(--secondary-color)] desc text-center lg:text-start">
            {{ highlightContent?.description }}
          </p>
        </div>
      </div>

      <!-- Cards Section -->
        <div class="grid grid-cols-2 gap-6 mt-10 md:grid-cols-3 xl:grid-cols-4">
        <div
          class="flex flex-col items-start p-5 bg-white border rounded-lg shadow-md hover:translate-y-[-10px] transition-all"
          style="
            box-shadow: 0px 15px 34px rgba(0, 0, 0, 0.1);
            -webkit-box-shadow: 0px 15px 34px rgba(0, 0, 0, 0.1);
          "
          v-for="item in options"
        >
          <h3
          class="text-xl font-bold h4 lg:text-2xl heading"
            style="line-height: 1.75rem"
          >
            {{ item.heading }}
          </h3>
          <p
            class="mt-4 mb-4 text-[var(--secondary-color)] text-[.875rem] leading-[1.25rem] desc"
          >
            {{ item.description }}
          </p>
          <Icon :name="item.iconName" style="color: #fb89a8" size="26" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.heading {
  font-family: var(--primary-font) !important;
  color: var(--primary-color);
}
.desc {
  font-family: var(--secondary-font);
}
</style>
