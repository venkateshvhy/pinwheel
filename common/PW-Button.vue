<script  setup lang="ts">
defineProps({
  label: String,
});
</script>
<template>
  <div class="flex">
    <p class="px-8 py-2.5 font-semibold bg-white rounded-full text-[.875rem] button-style">{{ label }}</p>
  </div>
</template>

<style scoped>
* {
  font-family: var(--secondary-font);
}
.button-style {
  -webkit-box-shadow: 0px 15px 34px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 15px 34px rgba(0, 0, 0, 0.1);
}
</style>
