<template>
  <div v-if="movie" class="flex w-full flex-col">
    <div
      class="relative flex items-start gap-x-5 py-5 pl-32"
      :class="{ 'blur-sm': isVideo }"
    >
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
        <div>
          <button
            class="flex items-center justify-between gap-x-3 border border-orange-600 bg-orange-300 px-5 py-2 font-semibold"
            @click="openVideoModal"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            Play Trailer
          </button>
        </div>
      </div>
    </div>
    <div></div>
    <div></div>
    <TrailerModel
      v-if="isVideo"
      :isVideo="isVideo"
      :posterPath="posterPath"
      :mediaURL="mediaURL"
      :title="movie.title"
      @close-emit="closeVideoModal"
    />
  </div>
</template>

<script setup>
import { computed, inject, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import TrailerModel from "../components/TrailerModel.vue";

const axios = inject("$axios");
const route = useRoute();
let movie = ref({
  credits: {
    crew: {},
  },
  images: {
    backdrops: {},
  },
});
let mediaURL = ref("");
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
    "/movie/" + id + "?append_to_response=credits,videos,images"
  );
  movie.value = response.data;
};

const openVideoModal = () => {
  mediaURL.value = openYoutube();
  isVideo.value = true;
};

const openYoutube = () => {
  if (!movie.value.videos) return;
  return "https://www.youtube.com/embed/" + movie.value.videos.results[0].key;
};

const closeVideoModal = () => {
  isVideo.value = false;
};
</script>

<style scoped></style>
