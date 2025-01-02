<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from "vue";
import PWButton from "~/common/PW-Button.vue";

const isMobileMenuOpen = ref(false);
const activeDropdown = ref<string | null>(null);
const isHoveringDropdown = ref(false);
const closeTimeoutRef = ref<number | null>(null);
const isScrolled = ref(false);

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
  activeDropdown.value = null;
};

const handleMouseEnter = (value: string) => {
  if (closeTimeoutRef.value) {
    clearTimeout(closeTimeoutRef.value);
    closeTimeoutRef.value = null;
  }
  activeDropdown.value = value;
  isHoveringDropdown.value = true;
};

const handleMouseLeave = (isMobile: boolean = false) => {
  isHoveringDropdown.value = false;
  closeTimeoutRef.value = window.setTimeout(() => {
    if (!isHoveringDropdown.value) {
      activeDropdown.value = null;
    }
  }, isMobile ? 300 : 100);
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

watch(() => activeDropdown.value, (newValue, oldValue) => {
  if (!newValue && closeTimeoutRef.value) {
    clearTimeout(closeTimeoutRef.value);
    closeTimeoutRef.value = null;
  }
});
</script>

<template>
  <nav class="relative transition-all duration-300" :class="{ 'nav-scrolled lg:bg-white lg:shadow': isScrolled }">
    <div class="px-4 mx-auto bg-white lg:bg-transparent">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <img :src="Images.LogoImage" alt="Logo" class="h-8" />
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex md:items-center md:space-x-8">
          <div
            v-for="item in navItems"
            :key="item.value"
            class="relative"
            @mouseenter="item.dropdown ? handleMouseEnter(item.value) : null"
            @mouseleave="item.dropdown ? handleMouseLeave(false) : null"
          >
            <a
              href="#"
              class="flex items-center home-nav-link"
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
              class="absolute z-10 w-48 py-2 mt-2 bg-white rounded-md shadow-lg"
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
          <PWButton label="Sign Up Now" />
        </div>

        <!-- Mobile menu button -->
        <div class="lg:hidden">
          <button
            @click="toggleMobileMenu"
            class="inline-flex items-center justify-center p-2 text-gray-700 rounded-md hover:text-orange-500"
          >
            <span class="sr-only">Open main menu</span>
            <Icon
              :name="isMobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'"
              class="w-6 h-6"
            />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      v-show="isMobileMenuOpen"
      class="relative left-0 right-0 flex flex-col w-full bg-white lg:hidden"
    >
      <div class="flex flex-col items-center px-2 pb-3 space-y-1">
        <div v-for="item in navItems" :key="item.value" class="relative w-full">
          <button
            @mouseenter="item.dropdown ? handleMouseEnter(item.value) : null"
            @mouseleave="item.dropdown ? handleMouseLeave(true) : null"
            class="flex items-center justify-center w-full px-3 py-2 text-left home-nav-link"
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
            class="flex flex-col justify-center w-full py-2 bg-[#fe60190d]"
            @mouseenter="isHoveringDropdown = true"
            @mouseleave="isHoveringDropdown = false"
          >
            <a
              v-for="dropdownItem in item.dropdown"
              :key="dropdownItem.label"
              :href="dropdownItem.link"
              class="block px-4 py-2 pl-6 text-center text-gray-700 home-nav-link"
            >
              {{ dropdownItem.label }}
            </a>
          </div>
        </div>
      </div>

      <!-- Sign Up Button (Mobile) -->
      <div class="self-center px-4 py-3">
        <PWButton label="Sign Up Now" />
      </div>
    </div>
  </nav>
</template>

<style scoped>
* {
  font-family: var(--secondary-font);
}

.home-nav-link.active {
  position: relative;
}

.home-nav-link.active::after {
  position: absolute;
  bottom: -5px;
  left: 0rem;
  right: 0rem;
  height: 0.125rem;
  --tw-content: "";
  content: var(--tw-content);
  display: block;
  background-image: linear-gradient(184.78deg, #fa709a 7.64%, #fee140 120.07%);
}

.home-nav-link {
  font-weight: 500;
  transition: color 0.2s;
}

.home-nav-link:hover {
  color: #fe6019;
}
</style>