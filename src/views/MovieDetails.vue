<template>
  <div v-if="movie" class="flex w-full flex-col">
    <div class="flex items-start gap-x-5 py-5 pl-32">
      <div class="w-1/5 hover:shadow-2xl">
        <img :src="posterPath" alt="" />
      </div>
      <div class="mt-5 w-1/2 text-left">
        <h1 class="text-2xl font-bold text-orange-400">{{ movie.title }}</h1>
        <div class="mt-2 flex justify-evenly gap-x-5">
          <h2>{{ movie.vote_average * 10 }}% | {{ movie.release_date }}</h2>
          <div class="text-orange-400">
            <span
              v-for="(genre, index) in movie.genres"
              :key="index"
              class="ml-1"
            >
              {{ genre.name }}
              <span v-if="movie.genres.length - 1 != index">,</span>
            </span>
          </div>
        </div>
        <p class="mt-3">{{ movie.overview }}</p>
        <div class="mt-5">
          <h2 class="text-lg font-semibold text-orange-600">Featured Cast</h2>
          <div
            v-for="(crew, index) in movie.credits.crew"
            :key="index"
            class="mt-3 ml-2"
          >
            <div v-if="index < 2">
              <h3 class="font-medium">{{ crew.name }}</h3>
              <span class="text-orange-300">{{ crew.job }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div></div>
    <div></div>
  </div>
</template>

<script setup>
import { computed, inject, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

const axios = inject("$axios");
const route = useRoute();
let movie = ref(null);
let mediaURL = ref({
  credits: {
    crew: {},
  },
  images: {
    backdrops: {},
  },
});
let isVideo = ref(false);

onMounted(() => {
  fetchMovie(route.params.id);
});

const posterPath = computed(() =>
  movie.value
    ? "https://image.tmdb.org/t/p/w500/" + movie.value.poster_path
    : ""
);

const fetchMovie = async (id) => {
  let response = await axios.get(
    "/movie/" + id + "?append_to_response=credits, videos,images"
  );
  movie.value = response.data;
};

// watch(route.params.id, (id) => {
//   fetchMovie(id);
// });

const openVideoModal = () => {
  mediaURL.value = openYoutube();
  isVideo = true;
};

const openYoutube = () => {
  if (!movie.videos) return;
  return "https://www.youtube.com/embed/" + movie.videos.results[0].key;
};
</script>

<style scoped></style>
