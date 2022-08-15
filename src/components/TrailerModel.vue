<template>
  <div
    class="absolute top-1/4 left-1/4 z-10 h-fit w-1/2 rounded-xl border border-orange-300 bg-white px-3 py-2"
  >
    <div class="flex items-start justify-between">
      <h1 class="ml-1 mb-2 text-left text-xl font-bold text-orange-400">
        {{ props.title }}
      </h1>
      <button @click="closeModal">
        <svg
          class="h-6 w-6 text-orange-300 hover:text-orange-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>
    <div class="p-5">
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

const emit = defineEmits(["close-model"]);

const closeModal = () => {
  emit("close-emit");
};
</script>

<style scoped></style>
