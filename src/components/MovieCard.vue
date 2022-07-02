<template>
  <div class="flex flex-col justify-center">
    <router-link :to="`/movie/${movie.id}`">
      <div class="py-3 sm:mx-auto sm:max-w-xl">
        <div
          class="flex max-h-80 space-x-8 border border-gray-100 bg-white p-8 shadow-lg sm:rounded-3xl"
        >
          <div class="h-48 w-1/2 overflow-visible">
            <img class="rounded-3xl shadow-lg" :src="posterPath" alt="" />
          </div>
          <div class="flex w-1/2 flex-col justify-between">
            <div class="space-y-4">
              <div class="flex items-start justify-between">
                <h2 class="text-sm font-semibold">{{ movie.title }}</h2>
                <div class="rounded-xl bg-yellow-400 p-2 font-bold">
                  {{ movie.vote_average }}
                </div>
              </div>
              <p class="max-h-40 overflow-y-hidden text-xs text-gray-400">
                {{ movie.overview }}
              </p>
            </div>
            <div
              class="flex-col justify-items-start text-xs font-semibold text-gray-400"
            >
              <span class="flex">
                <p v-for="(genre_id, index) in movie.genre_ids" :key="genre_id">
                  {{ getTypeName(genre_id, index) }}
                </p>
              </span>
              <p class="mt-1 max-w-0">{{ movie.release_date }}</p>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup>
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
  for (let genre of props.genres) {
    if (genre.id == genreId) {
      if (props.movie.genre_ids.length - 1 == index) return genre.name;
      return genre.name + ",";
    }
  }
};
</script>

<style scoped></style>
