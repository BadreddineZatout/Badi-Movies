<template>
  <div></div>
</template>

<script setup>
import { generate } from "@vue/compiler-core";
import { computed } from "vue";

const props = defineProps({
  movie: {
    required: true,
  },
  genres: {
    required: true,
  },
});

const posterPath = computed(
  () => "https://image.tmdb.org/t/p/w500/" + props.movie.poster_path
);

const getTypeName = (genreId, index) => {
  for (let genre of props.genre) {
    if (genre.id == genreId) {
      if (props.movie.genre_ids.length - 1 == index) return genre.name;
      return genre.name + ",";
    }
  }
};
</script>

<style scoped>
</style>