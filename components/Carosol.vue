<script  setup lang="ts">
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { GetCustomerReviews, GetPageContent } from '~/services/home';

const testimonials = ref();
const swiperModules = [Pagination, Autoplay];

const images: any = {
  1: Images.RichardImage,
  2: Images.HenryImage,
  3: Images.CooperImage
}

onMounted(async () => {
  const result = await GetCustomerReviews()
  console.log("customer reviews", result);
  testimonials.value = result.data
})
</script>

<template>
  <div class="container">
    <Swiper
      :modules="swiperModules"
      :slides-per-view="3"
      :space-between="30"
      :loop="true"
      :pagination="{
        clickable: true,
        el: '.custom-pagination'
      }"
      :autoplay="false",
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
        <div class="testimonial-card">
          <div class="card-content">
            <div class="profile-img-container">
              <img class="profile-img" :src="images[testimonial.id]" alt="profile picture" />
            </div>
            <h3 class="pt-8 name">{{ testimonial.name }}</h3>
            <p class="company">{{ testimonial.company }}</p>
            <p class="description">{{ testimonial.review }}</p>
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
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="custom-pagination"></div>
  </div>
</template>

<style scoped>
.carousel-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 0;
  padding-top: 3rem;
}

.testimonial-card {
  height: 100%;
  display: flex;
  background: var(--white-color);
  border-radius: 1.25rem;
  padding: 2.5rem;
  width: 100%;
  max-width: 380px;
  /* box-shadow: 10px 0px 20px 15px rgba(0, 0, 0, 0.05); */
  box-shadow: 10px 0px 46px 15px rgba(0, 0, 0, 0.05);
  --tw-bg-opacity: 1;
  position: relative;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
}

.profile-img-container {
  position: absolute;
  width: 96px;
  height: 96px;
  margin-bottom: 1.5rem;
  top: -30%;
  z-index: 10;
}

.profile-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2.5px solid transparent;
  background: linear-gradient(white, white) padding-box,
              linear-gradient(45deg, #FF7A00, #FFB873) border-box;
}

.name {
  font-size: 1.55rem;
  font-family: var(--primary-font);
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--primary-color);
  text-align: center;
}

.company {
  font-size: 1rem;
  color: var(--brown-color);
  font-family: var(--secondary-font);
  margin-bottom: 1.5rem;
  text-transform: lowercase;
  text-align: center;
}

.description {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--secondary-color);
  margin-bottom: 1.5rem;
  text-align: center;
  flex-grow: 1;
}

.stars {
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  margin-top: auto;
}

.star {
  font-size: 3rem;
  color: #E5E5E5;
}

.filled-star {
  color: #FFB873;
  background: linear-gradient(to right, #FF7A00, #FFB873);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.custom-pagination {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 0.5rem;
}

:deep(.swiper-pagination-bullet) {
  width: .875rem;
  height: .875rem;
  background: #E5E5E5;
  opacity: 1;
}

:deep(.swiper-pagination-bullet-active) {
  background: linear-gradient(to right, #FF7A00, #FFB873);
}

:deep(.swiper) {
  padding: 1rem 0;
  padding-top: 4rem;
}

:deep(.swiper-wrapper) {
  align-items: stretch;
  height: auto;
}

:deep(.swiper-slide) {
  height: auto;
  display: flex;
  justify-content: center;
}
.swiper-slide {
  margin-right: 20px !important;
}
</style>
