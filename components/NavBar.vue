<script setup lang="ts">
import { ref } from "vue";

const isMobileMenuOpen = ref(false);
const activeDropdown = ref<string | null>(null);
const isHoveringDropdown = ref(false);

const navItems = [
  { label: "Home", value: "Home" },
  { label: "About", value: "About" },
  { label: "Blog", value: "Blog" },
  { label: "Features", value: "Features" },
  { label: "How It Works", value: "How It Works" },
  {
    label: "Pages",
    value: "Pages",
    dropdown: [
      { label: "Career", link: "#" },
      { label: "Career Single", link: "#" },
      { label: "Integrations", link: "#" },
      { label: "Integration Single", link: "#" },
      { label: "Pricing", link: "#" },
      { label: "Changelogs", link: "#" },
      { label: "Terms & Conditions", link: "#" },
    ],
  },
  { label: "Contact", value: "Contact" },
];

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  // Close any open dropdowns when toggling mobile menu
  activeDropdown.value = null;
};

const toggleDropdown = (value: string) => {
  activeDropdown.value = activeDropdown.value === value ? null : value;
};

const handleParentHover = (value: string, isHovering: boolean) => {
  if (!isMobileMenuOpen.value) {
    if (isHovering) {
      activeDropdown.value = value;
    } else {
      setTimeout(() => {
        if (!isHoveringDropdown.value) {
          activeDropdown.value = null;
        }
      }, 100);
    }
  }
};
</script>

<template>
  <nav class="relative">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <img src="../assets/img/logo.svg" alt="Logo" class="h-8" />
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex md:items-center md:space-x-8">
          <div
            v-for="item in navItems"
            :key="item.value"
            class="relative"
            @mouseenter="item.dropdown ? handleParentHover(item.value, true) : null"
            @mouseleave="item.dropdown ? handleParentHover(item.value, false) : null"
          >
            <a
              href="#"
              class="home-nav-link flex items-center"
              :class="{
                'text-orange-500': activeDropdown === item.value,
                active: item.label === 'Home',
              }"
            >
              {{ item.label }}
              <template v-if="item.dropdown">
                <Icon name="heroicons:chevron-down-solid" class="ml-1" />
              </template>
            </a>

            <!-- Desktop Dropdown -->
            <div
              v-if="item.dropdown"
              v-show="activeDropdown === item.value"
              class="absolute bg-white shadow-lg rounded-md py-2 mt-2 w-48"
              @mouseenter="isHoveringDropdown = true"
              @mouseleave="isHoveringDropdown = false"
            >
              <a
                v-for="dropdownItem in item.dropdown"
                :key="dropdownItem.label"
                :href="dropdownItem.link"
                class="block px-4 py-2 text-gray-700 home-nav-link"
              >
                {{ dropdownItem.label }}
              </a>
            </div>
          </div>
        </div>

        <!-- Sign Up Button (Desktop) -->
        <div class="hidden lg:block">
          <div class="bg-white px-4 py-2 rounded-full shadow-lg">
            <p class="text-black">Sign Up Now</p>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="lg:hidden">
          <button
            @click="toggleMobileMenu"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-500"
          >
            <span class="sr-only">Open main menu</span>
            <Icon
              :name="isMobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'"
              class="h-6 w-6"
            />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      v-show="isMobileMenuOpen"
      class="lg:hidden absolute top-16 left-0 w-full shadow-lg"
    >
      <div class="px-2 pt-2 pb-3 space-y-1 flex flex-col items-center">
        <div v-for="item in navItems" :key="item.value" class="relative">
          <button
            @click="item.dropdown ? toggleDropdown(item.value) : null"
            class="w-full text-left px-3 py-2 home-nav-link flex items-center justify-between"
            :class="{
              'text-orange-500': activeDropdown === item.value,
              active: item.label === 'Home',
            }"
          >
            {{ item.label }}
            <Icon
              v-if="item.dropdown"
              :name="
                activeDropdown === item.value
                  ? 'heroicons:chevron-up-solid'
                  : 'heroicons:chevron-down-solid'
              "
              class="ml-1"
            />
          </button>

          <!-- Mobile Dropdown -->
          <div
            v-if="item.dropdown"
            v-show="activeDropdown === item.value"
            class="bg-gray-50 py-2"
          >
            <a
              v-for="dropdownItem in item.dropdown"
              :key="dropdownItem.label"
              :href="dropdownItem.link"
              class="block px-4 py-2 text-gray-700 home-nav-link pl-6"
            >
              {{ dropdownItem.label }}
            </a>
          </div>
        </div>
      </div>

      <!-- Sign Up Button (Mobile) -->
      <div class="px-4 py-3">
        <div
          class="bg-black px-4 py-2 flex justify-center items-center rounded-full"
        >
          <p class="text-white">Sign Up Now</p>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
* {
  font-family: Poppins, "sans-serif";
}

.home-nav-link.active::after {
  position: absolute;
  bottom: -5px;
  left: 0rem;
  right: 0rem;
  height: 0.125rem;
  --tw-content: "";
  content: var(--tw-content);
  background-image: linear-gradient(184.78deg, #fa709a 7.64%, #fee140 120.07%);
}

.home-nav-link {
  font-weight: 500;
  transition: color 0.2s;
}

.home-nav-link:hover {
  color: #fe6019;
}

@media (max-width: 768px) {
  .home-nav-link.active::after {
    display: none;
  }
}
</style>