<script  setup lang="ts">
import { ref } from 'vue';

const socialLinks = ref([
  { icon: 'mdi:facebook', url: '#' },
  { icon: 'mdi:twitter-circle', url: '#' },
  { icon: 'mdi:linkedin', url: '#' },
  { icon: 'mdi:skype', url: '#' }
]);

const quickLinks = ref([
  { name: 'About', url: '#' },
  { name: 'Category', url: '#' },
  { name: 'Testimonial', url: '#' },
  { name: 'Contact', url: '#' }
]);
</script>

<template>
  <footer class="py-16 bg-[#e5e5e580]">
    <div class="container px-4 mx-auto">
      <div class="grid grid-cols-1 gap-8 py-8 md:grid-cols-2 lg:grid-cols-4">
        <!-- Logo and Description -->
        <div class="space-y-6">
          <div class="flex items-center space-x-2">
            <img :src="Images.LogoImage" alt="Pinwheel" class="h-auto max-w-full" />
          </div>
          <p class="text-[var(--secondary-color)] desc text-[14px]">
            Lorem ipsum dolor sit sed dmi amet, consectetur adipiscing. Cdo tellus, sed condimentum volutpat.
          </p>
        </div>

        <!-- Socials -->
        <div class="space-y-6">
          <h3 class="text-[1rem] font-semibold text-[var(--primary-color)] desc">Socials</h3>
          <div class="space-y-4">
            <p class="text-[var(--secondary-color)] desc text-[14px]">themefisher@gmail.com</p>
            <div class="flex space-x-4">
              <a 
                v-for="(link, index) in socialLinks" 
                :key="index"
                :href="link.url"
                class="flex items-center justify-center w-10 h-10 transition-all bg-white hover:bg-[#fe6019] rounded-full shadow-sm hover:shadow-md"
              >
                <Icon :name="link.icon" class="text-[14px] text-gray-600 hover:text-[var(--white-color)]"></Icon>
              </a>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="space-y-6">
          <h3 class="text-[1rem] font-semibold text-[var(--primary-color)] desc">Quick Links</h3>
          <ul class="space-y-4">
            <li v-for="(link, index) in quickLinks" :key="index">
              <a :href="link.url" class="text-[var(--secondary-color)] desc text-[14px] hover:text-[#fe6019] hover:underline">
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Location & Contact -->
        <div class="space-y-6">
          <h3 class="text-[1rem] font-semibold text-[var(--primary-color)] desc">Location & Contact</h3>
          <div class="space-y-4">
            <p class="text-[var(--secondary-color)] desc text-[14px]">
              2118 Thornridge Cir. Syracuse, Connecticut 35624
            </p>
            <p class="text-[var(--secondary-color)] desc text-[14px]">(704) 555-0127</p>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-16 text-center text-[var(--secondary-color)] desc text-[14px]">
        <p>Designed And Developed by Themefisher | Distributed by ThemeWagon</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Base styles */
.container {
  max-width: 1200px;
}

/* Hover effects */
a {
  transition: all 0.3s ease;
}

a:hover {
  opacity: 0.8;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .container {
    max-width: 100%;
    padding: 0 2rem;
  }
}

@media (max-width: 768px) {
  footer {
    padding: 3rem 0;
  }

  .grid {
    gap: 2rem;
  }
}

@media (max-width: 640px) {
  footer {
    padding: 2rem 0;
  }

  .container {
    padding: 0 1rem;
  }

  h3 {
    font-size: 1.25rem;
  }

  p, a {
    font-size: 0.875rem;
  }
}
</style> 