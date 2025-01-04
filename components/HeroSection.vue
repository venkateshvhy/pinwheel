<script  setup lang="ts">
import PWButton from '~/common/PW-Button.vue';

const title = "Helping teams in the world with focus";
const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas Werat viverra id et aliquet. vulputate egestas sollicitudin.";
</script>

<template>
  <div class="m-8 hero-container row justify-center rounded-b-[80px] rounded-t-[20px] px-[30px] pb-[75px] pt-16">
    <div class="flex flex-col gap-10 hero-content lg:flex-row">
      <div class="text-content">
        <h1 class="title heading text-[1.9rem] font-bold md:text-[2.4rem]">{{ title }}</h1>
        <PWButton label="Download The Theme" />
      </div>
        <p class="w-full description">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
.hero-container {
  position: relative;
  padding: 2rem;
  background-image: linear-gradient(184.78deg, #fa709a 7.64%, #fee140 120.07%);
  overflow: hidden;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.text-content {
  max-width: 600px;
}

.title {
  font-size: 4rem;
  font-weight: 700;
  color: white;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.description {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 2rem;
  font-family: var(--secondary-font);
}

.download-btn {
  background: white;
  color: #333333;
  font-size: 1.125rem;
  font-weight: 500;
  padding: 1rem 2rem;
  border-radius: 3rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.download-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .hero-container {
    /* min-height: 500px; */
  }

  .title {
    font-size: 3rem;
  }

  .description {
    font-size: 1.125rem;
  }
}

@media (max-width: 768px) {
  .hero-container {
    /* min-height: 400px; */
    /* border-radius: 1.5rem; */
  }

  .hero-content {
    padding: 3rem 1.5rem;
  }

  .title {
    font-size: 2.5rem;
  }

  .text-content {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .hero-container {
    /* min-height: 350px; */
    /* border-radius: 1rem; */
    padding: 1rem;
  }

  .hero-content {
    padding: 2rem 1rem;
  }

  .title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .description {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  .download-btn {
    padding: 0.875rem 1.75rem;
    font-size: 1rem;
  }
}
</style> 