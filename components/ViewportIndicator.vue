<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const breakpoint = ref('');

const updateBreakpoint = () => {
  const width = window.innerWidth;
  if (width >= 1536) breakpoint.value = '2XL';
  else if (width >= 1280) breakpoint.value = 'XL';
  else if (width >= 1024) breakpoint.value = 'LG';
  else if (width >= 768) breakpoint.value = 'MD';
  else if (width >= 640) breakpoint.value = 'SM';
  else breakpoint.value = 'ALL';
};

onMounted(() => {
  updateBreakpoint();
  window.addEventListener('resize', updateBreakpoint);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateBreakpoint);
});
</script>

<template>
  <!-- class="fixed top-0 left-0 z-50 px-2 py-1 text-xs font-bold text-white bg-green-400 rounded-br"> -->
  <div 
  class="fixed left-0 top-0 z-50 flex w-[30px] items-center justify-center bg-gray-200 py-[2.5px] text-[12px] uppercase text-black sm:bg-red-200 md:bg-yellow-200 lg:bg-green-200 xl:bg-blue-200 2xl:bg-pink-200"
  >
    {{ breakpoint }}
  </div>
</template>