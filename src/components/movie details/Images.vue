<template>
  <div class="mt-5 w-full">
    <h1 class="ml-10 text-left text-4xl font-semibold">Images</h1>
    <div class="mt-5 flex w-full flex-wrap justify-center gap-10 pl-10">
      <div
        v-for="image in images"
        :key="image.id"
        class="w-fit py-2 px-4 shadow-lg hover:scale-105 hover:cursor-pointer"
      >
        <img :src="movieImage(image)" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  images: {
    required: true,
  },
});
const movieImage = (image) => {
  if (image.file_path) {
    return "https://image.tmdb.org/t/p/w300/" + image.file_path;
  } else {
    return "https://via.placeholder.com/300x450";
  }
};
</script>

<style scoped></style>
