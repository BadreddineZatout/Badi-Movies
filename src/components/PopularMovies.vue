<template>
  <div class="mx-3">
    <div class="grid grid-flow-row grid-cols-1 sm:grid-cols-3 gap-x-2 gap-y-10">
      <MovieCard
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
        :genres="genres"
      />
    </div>
  </div>
</template>

<script setup>
import { inject, onMounted, ref } from "vue";
import MovieCard from "./MovieCard.vue";

const axios = inject("$axios");
let movies = ref([]);
let genres = ref([]);

onMounted(async () => {
  fetchGenres();
  try {
    const response = await axios.get("/movie/popular");
    movies.value = response.data.results;
    console.log(movies);
  } catch (error) {
    console.log(error);
  }
});

const fetchGenres = async () => {
  try {
    const response = await axios.get("/genre/movie/list");
    genres.value = response.data.genres;
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped>
</style>