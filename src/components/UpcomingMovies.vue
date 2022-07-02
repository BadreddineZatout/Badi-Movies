<template>
  <div class="mt-20">
    <h2 class="mb-10 ml-5 text-3xl font-semibold text-gray-800">
      Upcoming Movies
    </h2>
    <div class="mx-auto max-w-4xl bg-gray-300">
      <carousel :items-to-show="3.4" :autoplay="2000" :wrap-around="true">
        <slide :index="i" :key="i" v-for="(movie, i) in this.upcomingMovies">
          <figure class="carousel__item m-0">
            <img
              :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
            />
            <figcaption
              class="absolute bottom-0 min-w-full bg-gray-900 p-5 text-lg font-semibold text-white"
            >
              {{ movie.title }}
            </figcaption>
          </figure>
        </slide>

        <template #addons>
          <!-- <navigation /> -->
          <pagination />
        </template>
      </carousel>
    </div>
  </div>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { inject, onMounted, ref } from "vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const axios = inject("$axios");
let upcomingMovies = ref([]);

const fetchUpcomingMovies = async () => {
  const response = await axios.get("/movie/upcoming");
  upcomingMovies.value = response.data.results.slice(1, 6);
};

onMounted(async () => {
  fetchUpcomingMovies();
});
</script>

<style scoped>
.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}
</style>
