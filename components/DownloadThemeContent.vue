<script setup lang="ts">
import { ref, onMounted } from "vue";
import PWButton from "~/common/PW-Button.vue";
import { GetPageContent } from "~/services/home";

const property = ref();

onMounted(async () => {
  const result = await GetPageContent('scale')
  property.value = result.data[0]
})
</script>
<template>
  <section class="relative py-16 banner">
    <!-- Main content -->
    <div class="container">
      <div class="flex flex-col flex-wrap items-center lg:flex-row">
        <!-- Left content -->
        <div class="basis-1/2">
          <h1
            class="text-[2.3rem] font-bold text-[var(--primary-color)] leading-tight md:text-[3rem]"
            style="font-family: var(--primary-font); --tw-text-opacity: 1;"
          >
            {{ property?.heading }}
          </h1>
          <p class="text-[1rem] text-[var(--brown-color)] mt-6">
            {{ property?.description }}
          </p>
          <div class="flex mt-8">
            <PWButton :label="property?.buttonLabel" />
          </div>
        </div>

        <!-- Right content - Stats Card -->
        <div class="basis-1/2">
          <img
            :src="Images.NetIncomeImage"
            alt="Income chart"
            class="object-contain w-full"
            width="603"
            height="396"
          />
        </div>
      </div>
    </div>
    <img
      :src="Images.BannerImage"
      alt="banner"
      class="banner-shape absolute -top-[6rem]  right-0 -z-[1] w-full max-w-[30%]"
    />
    <!-- -top-[8rem] -->
  </section>
</template>

<style scoped>
* {
  font-family: var(--secondary-font);
}

select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23666666'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  appearance: none;
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.text-container {
    margin-left: auto;
    margin-right: auto;
}
</style>
