<script setup lang="ts">
import PWButton from "~/common/PW-Button.vue";
</script>
<template>
  <div class="relative">
    <!-- Main content -->
    <div class="container px-4 py-12 mx-auto">
      <div class="grid items-center gap-12 md:grid-cols-1 lg:grid-cols-2">
        <!-- Left content -->
        <div class="max-w-xl space-y-6">
          <h1
            class="text-[2.3rem] font-bold text-[#222222] leading-tight md:text-[2.9rem]"
            style="font-family: Merriweather, sans-serif; --tw-text-opacity: 1;"
          >
            Scale design & dev operations with Avocode Enterprise
          </h1>
          <p class="text-lg text-[#666]">
            A fully integrated suite of authentication & authoriz products,
            Stytch's platform removes the headache of.
          </p>
          <div class="flex">
            <PWButton label="Download The Theme" />
          </div>
        </div>

        <!-- Right content - Stats Card -->
        <div class="flex">
          <img
            src="../assets/img/netincome.png"
            alt="Income chart"
            class="object-contain w-full"
            width="603"
            height="396"
          />
        </div>
      </div>
    </div>
    <img
      src="../assets/img/banner-shape.svg"
      alt=""
      class="banner-shape absolute -top-28 right-0 -z-[1] w-full max-w-[30%]"
    />
  </div>
</template>

<style scoped>
* {
  font-family: Poppins, "sans-serif";
}
.container {
  max-width: 1280px;
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
</style>
