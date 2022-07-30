<template>
  <div
    class="top-1/5 absolute left-1/4 z-10 h-fit w-1/2 border border-gray-400 bg-white px-3 py-2"
  >
    <h1 class="ml-1 mb-2 text-left text-xl font-bold text-orange-400">
      {{ props.title }}
    </h1>
    <div>
      <iframe
        class="h-96 w-full"
        v-if="props.isVideo"
        :src="props.mediaURL"
        allowfullscreen
      ></iframe>
      <img v-else :src="props.posterPath" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isVideo: {
    required: true,
    type: Boolean,
  },
  title: {
    required: true,
  },
  posterPath: {
    required: true,
  },
  mediaURL: {
    required: true,
  },
});
</script>

<style scoped></style>
