<template>
  <div class="flex flex-col justify-center">
    <router-link :to="`/movie/${movie.id}`">
      <div class="py-3 sm:max-w-xl sm:mx-auto">
        <div
          class="
            bg-white
            shadow-lg
            border-gray-100
            max-h-80
            border
            sm:rounded-3xl
            p-8
            flex
            space-x-8
          "
        >
          <div class="h-48 overflow-visible w-1/2">
            <img class="rounded-3xl shadow-lg" :src="posterPath" alt="" />
          </div>
          <div class="flex flex-col w-1/2 justify-between">
            <div class="space-y-4">
              <div class="flex justify-between items-start">
                <h2 class="text-sm font-semibold">{{ movie.title }}</h2>
                <div class="bg-yellow-400 font-bold rounded-xl p-2">
                  {{ movie.vote_average }}
                </div>
              </div>
              <p class="text-gray-400 text-xs max-h-40 overflow-y-hidden">
                {{ movie.overview }}
              </p>
            </div>
            <div
              class="
                flex-col
                justify-items-start
                font-semibold
                text-gray-400 text-xs
              "
            >
              <span class="flex">
                <p v-for="(genre_id, index) in movie.genre_ids" :key="genre_id">
                  {{ getTypeName(genre_id, index) }}
                </p>
              </span>
              <p class="max-w-0 mt-1">{{ movie.release_date }}</p>
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

<style scoped>
</style>