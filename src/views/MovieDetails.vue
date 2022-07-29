<template>
  <div class="flex w-full flex-col">
    <div class="">
      <div>
        <img
          :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
          alt=""
        />
      </div>
      <div></div>
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

const posterPath = computed(
  () => "https://image.tmdb.org/t/p/w500/" + movie.poster_path
);

const fetchMovie = async (id) => {
  let response = await axios.get(
    "/movie/" + id + "?append_to_response=credits, videos,images"
  );
  movie.value = response.data;
};

watch(route.params.id, (id) => {
  fetchMovie(id);
});
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
