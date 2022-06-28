<template>
  <div class="mx-3"></div>
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
    movies = response.data.results;
  } catch (error) {
    console.log(error);
  }
});

const fetchGenres = async () => {
  try {
    const response = await axios.get("/genre/movie/list");
    genres = response.data.genres;
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped>
</style>