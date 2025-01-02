<script  setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Courtney Henry",
    company: "Microsoft Corp",
    description:
      "Our platform helps build secure onboarding authentication experiences & engage your users. We build.",
    image: Images.HenryImage,
    rating: 4,
  },
  {
    name: "Ronald Richards",
    company: "Meta Limited",
    description:
      "Our platform helps build secure onboarding authentication experiences & engage your users. We build.",
    image: Images.RichardImage,
    rating: 5,
  },
  {
    name: "Bessie Cooper",
    company: "Apple Inc Ltd",
    description:
      "Our platform helps build secure onboarding authentication experiences & engage your users. We build.",
    image: Images.CooperImage,
    rating: 4,
  },
  {
    name: "Courtney Henry",
    company: "Microsoft Corp",
    description:
      "Our platform helps build secure onboarding authentication experiences & engage your users. We build.",
    image: Images.HenryImage,
    rating: 4,
  },
  {
    name: "Ronald Richards",
    company: "Meta Limited",
    description:
      "Our platform helps build secure onboarding authentication experiences & engage your users. We build.",
    image: Images.RichardImage,
    rating: 5,
  },
  {
    name: "Bessie Cooper",
    company: "Apple Inc Ltd",
    description:
      "Our platform helps build secure onboarding authentication experiences & engage your users. We build.",
    image: Images.CooperImage,
    rating: 4,
  },
];

const swiperModules = [Pagination, Autoplay];
</script>

<template>
  <div>
    <Swiper
      :modules="swiperModules"
      :slides-per-view="3"
      :space-between="30"
      :loop="true"
      :slidesPerGroup="1"
      :allowTouchMove="true"
      :simulateTouch="true"
      :threshold="20"
      :resistance="false"
      :watchSlidesProgress="true"
      :pagination="{
        clickable: true,
        el: '.custom-pagination'
      }"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :breakpoints="{
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }"
      class="mySwiper"
    >
      <SwiperSlide v-for="(testimonial, index) in testimonials" :key="index">
        <div class="flex flex-col items-center testimonial-card">
          <img class="profile-img" :src="testimonial.image" alt="profile picture" />
          <h3 class="name">{{ testimonial.name }}</h3>
          <p class="company">{{ testimonial.company }}</p>
          <p class="description">{{ testimonial.description }}</p>
          <div class="stars">
            <span
              v-for="star in 5"
              :key="star"
              :class="{ 'filled-star': star <= testimonial.rating }"
              class="star"
            >
              ★
            </span>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="custom-pagination"></div>
  </div>
</template>

<style scoped>
.testimonial-card {
  background: #ffffff;
  /* box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); */
  border-radius: 0.75rem;
  padding: 20px;
  margin: 10px;
  width: 300px;
  -webkit-box-shadow: 0px 10px 45px rgba(0, 0, 0, 0.05);
  /* box-shadow: 0px 10px 45px rgba(0, 0, 0, 0.05); */
  box-shadow: 0px 0px 20px 20px rgba(0, 0, 0, 0.05);
}

.profile-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
  border: 3px solid #ff7a00;
}

.name {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 5px 0;
  font-family: var(--primary-font);
}

.company {
  font-size: 1rem;
  color: var(--secondary-color);
  margin-bottom: 10px;
}

.description {
  font-size: 1rem;
  color: #888888;
  margin-bottom: 20px;
  text-align: center;
}

.stars {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.star {
  font-size: 50px;
  color: #cccccc;
  margin: 0 2px;
  max-width: 100%;
  height: auto;
}

.filled-star {
  color: #ffcc00;
}

.custom-pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

:deep(.swiper) {
  padding: 20px 0;
  overflow: hidden;
}

:deep(.swiper-wrapper) {
  align-items: center;
  cursor: grab;
}

:deep(.swiper-wrapper:active) {
  cursor: grabbing;
}

:deep(.swiper-slide) {
  display: flex;
  justify-content: center;
  transition: all 0.3s ease;
  touch-action: pan-y;
  user-select: none;
  -webkit-user-drag: none;
  -webkit-tap-highlight-color: transparent;
}

:deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background: #cccccc;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  transition: background 0.3s;
  opacity: 1;
}

:deep(.swiper-pagination-bullet-active) {
  background: #ff7a00;
}

/* Hide navigation arrows */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  display: none;
}
</style>
