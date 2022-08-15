<template>
  <div class="mt-5 w-full">
    <h1 class="ml-10 text-left text-6xl font-semibold">Casts</h1>
    <div class="mt-5 flex w-full flex-wrap justify-start gap-10 pl-10">
      <div
        v-for="cast in casts"
        :key="cast.id"
        class="w-1/6 p-2 shadow-lg hover:scale-105 hover:cursor-pointer"
      >
        <img :src="castProfileImage(cast)" />
        <div class="mt-2 flex justify-between gap-x-2">
          <h2>{{ cast.name }}</h2>
          <h2 class="text-gray-300">{{ cast.character }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  casts: {
    required: true,
  },
});
const castProfileImage = (cast) => {
  if (cast.profile_path) {
    return "https://image.tmdb.org/t/p/w300" + cast.profile_path;
  } else {
    return "https://via.placeholder.com/300x450";
  }
};
</script>

<style scoped></style>
