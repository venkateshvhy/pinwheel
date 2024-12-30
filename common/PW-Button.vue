<script setup lang="ts">
defineProps({
  label: String,
});
</script>
<template>
  <div
    class="btn btn-white"
    style="box-shadow: 0px 15px 34px rgba(0, 0, 0, 0.1)"
  >
    <p class="text-black text-[14px]">{{ label }}</p>
  </div>
</template>

<style scoped>
* {
  font-family: Poppins, "sans-serif";
}
.btn-white {
  min-width: 150px;
  border-radius: 50px;
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  text-align: center;
  text-transform: capitalize;
  --tw-text-opacity: 1;
  color: rgb(34 34 34 / var(--tw-text-opacity));
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
    0 4px 6px -4px var(--tw-shadow-color);
  -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  -webkit-box-shadow: 0px 15px 34px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 15px 34px rgba(0, 0, 0, 0.1);
}
.btn {
  display: inline-block;
  height: 52px;
  border-width: 1px;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  line-height: 36px;
  -webkit-transition-property: all;
  transition-property: all;
  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-transition-duration: 200ms;
  transition-duration: 200ms;
}
</style>
