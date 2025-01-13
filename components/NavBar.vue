<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from "vue";
import PWButton from "~/common/PW-Button.vue";
import { GetMenuListApi } from "~/services/home";


const isMobileMenuOpen = ref(false);
const activeDropdown = ref<string | null>(null);
const isHoveringDropdown = ref(false);
const closeTimeoutRef = ref<number | null>(null);
const isScrolled = ref(false);
const navItems = ref<any[]>([]);

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
  closeTimeoutRef.value = window.setTimeout(
    () => {
      if (!isHoveringDropdown.value) {
        activeDropdown.value = null;
      }
    },
    isMobile ? 300 : 100
  );
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(async() => {
  window.addEventListener("scroll", handleScroll);
  const menuList = await GetMenuListApi();
  navItems.value = menuList.data;
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

watch(
  () => activeDropdown.value,
  (newValue, oldValue) => {
    if (!newValue && closeTimeoutRef.value) {
      clearTimeout(closeTimeoutRef.value);
      closeTimeoutRef.value = null;
    }
  }
);
</script>

<template>
  <header 
  class="py-6 bg-white md:bg-white lg:bg-transparent" 
  :class="{
    'lg:!bg-white lg:shadow-lg': isScrolled
  }"
  >
  <nav
  class="container navbar"
  >
        <!-- Logo -->
        <div class="flex-shrink-0 order-1">
          <img :src="Images.LogoImage" alt="Logo" />
        </div>

        <!-- Desktop Navigation -->
        <ul class="navbar-nav order-2 hidden w-full flex-[0_0_100%] lg:order-1 lg:flex lg:w-auto lg:flex-auto lg:justify-center lg:space-x-5">
          <li class="nav-item" v-for="(item, index) in navItems" :key="index"
           @mouseenter="item.children ? handleMouseEnter(item.name) : null"
           @mouseleave="item.children ? handleMouseLeave(false) : null"
          >
          <template v-if="item?.children?.length > 0" class="relative group">
            <span class="inline-flex items-center nav-link">{{ item.name }}
            <Icon name="heroicons:chevron-down-solid" class="font-bold " size="14" />
            </span>
          
            <div
              v-if="item?.children?.length > 0"
              v-show="activeDropdown === item.name"
              class="absolute z-10 w-48 py-2 mt-2 text-left bg-white rounded-md shadow-lg"
              @mouseenter="isHoveringDropdown = true"
              @mouseleave="isHoveringDropdown = false"
            >
              <a
                v-for="dropdownItem in item.children"
                :key="dropdownItem.label"
                :href="dropdownItem.link"
                class="block px-4 py-1 text-gray-700 home-nav-link"
              >
                {{ dropdownItem.name }}
              </a>
            </div>
          </template>
            <a v-else href="#" class="nav-link"
            :class="{active: item.name === 'Home'}"
            >{{ item.name }}</a>
          </li>
        </ul>

        <!-- Sign Up Button (Desktop) -->
        <div class="items-center order-1 hidden ml-auto md:order-2 md:ml-0 lg:flex">
          <PWButton label="Sign Up Now" />
        </div>

        <!-- Mobile menu button -->
        <div class="order-2 lg:hidden">
          <button
            @click="toggleMobileMenu"
            class="inline-flex items-center justify-center text-gray-700 rounded-md hover:text-orange-500"
          >
            <span class="sr-only">Open main menu</span>
            <Icon
              :name="isMobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'"
              class="w-8 h-8"
            />
          </button>
        </div>

    <!-- Mobile menu -->
    <div
      v-show="isMobileMenuOpen"
      class="relative left-0 right-0 flex flex-col order-3 w-full bg-white lg:hidden"
    >
      <div class="flex flex-col items-center px-2 pb-3 space-y-1">
        <div v-for="item in navItems" :key="item.name" class="relative w-full">
          <button
            @mouseenter="item.children ? handleMouseEnter(item.name) : null"
            @mouseleave="item.children ? handleMouseLeave(true) : null"
            class="flex items-center justify-center w-full px-3 py-2 text-left home-nav-link"
            :class="{
              'text-orange-500': activeDropdown === item.name,
              active: item.name === 'Home',
            }"
          >
            {{ item.name }}
            <Icon
              v-if="item?.children?.length > 0"
              :name="
                activeDropdown === item.name
                  ? 'heroicons:chevron-up-solid'
                  : 'heroicons:chevron-down-solid'
              "
              class="ml-1"
              size="14"
            />
          </button>

          <!-- Mobile Dropdown -->
          <div
            v-if="item.children"
            v-show="activeDropdown === item.name"
            class="flex flex-col justify-center w-full py-2 bg-[#fe60190d]"
            @mouseenter="isHoveringDropdown = true"
            @mouseleave="isHoveringDropdown = false"
          >
            <a
              v-for="dropdownItem in item.children"
              :key="dropdownItem.label"
              :href="dropdownItem.link"
              class="block px-4 py-2 pl-6 text-center text-gray-700 home-nav-link"
            >
              {{ dropdownItem.name }}
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
  </header>
</template>

<style scoped>
* {
  font-family: var(--secondary-font);
}

.nav-container {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.home-nav-link {
  font-size: 15px;
  font-family: var(--secondary-font);
  color: var(--primary-color);
  font-weight: 400;
  transition: color 0.2s;
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

.home-nav-link:hover {
  color: #fe6019;
}

.navbar {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}

/* exact design */
@media (min-width: 1024px) {
    .navbar-nav {
        text-align: left;
    }
}

.navbar-nav {
    text-align: center;
}

.nav-link.active {
    position: relative;
}
@media (min-width: 1024px) {
    .nav-link {
        display: inline-block;
    }
}
@media (min-width: 768px) {
    .nav-link {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }
}
.nav-link {
    display: block;
    /* padding: 0.75rem; */
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 15px;
    --tw-text-opacity: 1;
    color: rgb(34 34 34 / var(--tw-text-opacity));
    -webkit-transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform, -webkit-filter, -webkit-backdrop-filter;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform, -webkit-filter, -webkit-backdrop-filter;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-box-shadow, -webkit-transform, -webkit-filter, -webkit-backdrop-filter;
    -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    -webkit-transition-duration: 150ms;
    transition-duration: 150ms;
}

.nav-link.active::after {
    position: absolute;
    bottom: 0px;
    left: 0.5rem;
    right: 0.5rem;
    height: 0.125rem;
    background-image: -webkit-gradient(linear, right bottom, left top, from(var(--tw-gradient-stops)));
    background-image: linear-gradient(to top left, var(--tw-gradient-stops));
    --tw-content: "";
    content: var(--tw-content);
    background-image: linear-gradient(184.78deg, #fa709a 7.64%, #fee140 120.07%);
}

.nav-link:hover {
    --tw-text-opacity: 1;
    color: rgb(254 96 25 / var(--tw-text-opacity));
}

@media (min-width: 1024px) {
    .header {
        background-color: transparent;
    }
}

.header {
    position: sticky;
    top: 0px;
    z-index: 50;
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    -webkit-transition-property: all;
    transition-property: all;
    -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    -webkit-transition-duration: 300ms;
    transition-duration: 300ms;
}

.header-sticky {
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
    --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
    -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    -webkit-box-shadow: 0px 10px 45px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 10px 45px rgba(0, 0, 0, 0.05);
}

.nav-dropdown-item {
    margin-bottom: 0.25rem;
}

.nav-dropdown-link {
    min-width: 150px;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    --tw-text-opacity: 1;
    color: rgb(34 34 34 / var(--tw-text-opacity));
    -webkit-transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform, -webkit-filter, -webkit-backdrop-filter;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform, -webkit-filter, -webkit-backdrop-filter;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-box-shadow, -webkit-transform, -webkit-filter, -webkit-backdrop-filter;
    -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    -webkit-transition-duration: 150ms;
    transition-duration: 150ms;
}

</style>