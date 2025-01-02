<script setup lang="ts">
const options = [
  {
    label: "Live Caption",
    description: "Lorem ipsum dolor sit amet consectetur, adipiscing elit.",
    icon: "heroicons:tv",
  },
  {
    label: "Smart Reply",
    description: "Lorem ipsum dolor sit amet consectetur, adipiscing elit.",
    icon: "heroicons:paper-clip-solid",
  },
  {
    label: "Sound Amplifier",
    description: "Lorem ipsum dolor sit amet consectetur, adipiscing elit.",
    icon: "heroicons:bell",
  },
  {
    label: "Gesture Navigation",
    description: "Lorem ipsum dolor sit amet consectetur, adipiscing elit.",
    icon: "heroicons:globe-europe-africa",
  },
  {
    label: "Dark Theme",
    description: "Lorem ipsum dolor sit amet consectetur, adipiscing elit.",
    icon: "heroicons:light-bulb",
  },
  {
    label: "Privacy Controls",
    description: "Lorem ipsum dolor sit amet consectetur, adipiscing elit.",
    icon: "heroicons:arrow-path",
  },
  {
    label: "Location Controls",
    description: "Lorem ipsum dolor sit amet consectetur, adipiscing elit.",
    icon: "heroicons:map-pin",
  },
  {
    label: "Security Updates",
    description: "Lorem ipsum dolor sit amet consectetur, adipiscing elit.",
    icon: "heroicons:lock-closed",
  },
  {
    label: "Focus Mode",
    description: "Lorem ipsum dolor sit amet consectetur, adipiscing elit.",
    icon: "heroicons:viewfinder-circle-solid",
  },
  {
    label: "Family Link",
    description: "Lorem ipsum dolor sit amet consectetur, adipiscing elit.",
    icon: "heroicons:link",
  },
];
</script>

<template>
  <div class="relative px-2 py-16">
    <img
      :src="Images.FeatureShapeImage"
      alt="image"
      class="absolute left-0 top-0 -z-[1] -translate-y-1/2"
    />
    <div class="mx-auto max-w-7xl">
      <!-- Heading Section -->
      <div class="mb-12 lg:flex lg:justify-between lg:items-start">
        <div>
          <h2
            class="mb-4 text-[1.9rem] font-bold md:text-[2.4rem] heading leading-1 md:text-center lg:text-start"
          >
            The Highlighting Part Of Our Solution
          </h2>
        </div>
        <div class="lg:max-w-md">
          <p class="text-[#888888] desc md:text-center lg:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            egestas Werat viverra id et aliquet. vulputate egestas sollicitudin.
          </p>
        </div>
      </div>

      <!-- Cards Section -->
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          class="flex flex-col items-start p-6 bg-white border rounded-lg shadow-md"
          style="
            box-shadow: 0px 15px 34px rgba(0, 0, 0, 0.1);
            -webkit-box-shadow: 0px 15px 34px rgba(0, 0, 0, 0.1);
          "
          v-for="item in options"
        >
          <h3
            class="text-xl h4 heading text-[1.25rem] font-bold"
            style="line-height: 1.75rem"
          >
            {{ item.label }}
          </h3>
          <p
            class="mt-4 mb-4 text-[#888888] text-[.875rem] leading-[1.25rem] desc"
          >
            {{ item.description }}
          </p>
          <Icon :name="item.icon" style="color: #fb89a8" size="26" />
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
