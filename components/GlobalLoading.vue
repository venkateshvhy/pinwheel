<script setup lang="ts">
import { useLoadingStore } from "~/stores/loadingStore";
const loadingStore = useLoadingStore();
const isLoading = computed(() => loadingStore.isLoading);
</script>
<template>
  <div
    v-if="isLoading"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="loader"></div>
  </div>
</template>

<style>
.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #fe6019;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
