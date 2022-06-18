<template>
  <nav
    class="
      sm:flex sm:items-center sm:justify-between sm:flex-wrap
      bg-orange-600
      py-1
      lg:px-12
      shadow
    "
  >
    <div class="flex items-center justify-start gap-4">
      <div class="flex items-center">
        <div class="sm:hidden ml-3">
          <button
            class="block h-8 mr-3 text-white items-center hover:font-bold"
            @click="show = !show"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                x-show="!show"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
              <path
                x-show="show"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              ></path>
            </svg>
          </button>
        </div>
        <svg
          class="w-12 h-12 sm:w-16 sm:h-16 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          ></path>
        </svg>
        <h1 class="text-white text-lg ml-2 sm:text-2xl sm:font-bold">
          Badi Movie
        </h1>
      </div>

      <!-- Web View -->
      <div class="hidden sm:flex items-centre text-white">
        <router-link :to="{ name: 'Home' }">
          <button
            class="hover:font-semibold p-2 mr-2 rounded-md"
            :class="{
              'bg-orange-500': route.fullPath === '/',
              'font-semibold': route.fullPath === '/',
            }"
          >
            Movies
          </button>
        </router-link>
        <router-link :to="{ name: 'Actors' }">
          <button
            class="hover:font-semibold p-2 mr-2 rounded-md"
            :class="{
              'bg-orange-500': route.fullPath === '/actors',
              'font-bold': route.fullPath === '/actors',
            }"
          >
            Actors
          </button>
        </router-link>
        <router-link :to="{ name: 'Profile' }">
          <button
            class="hover:font-semibold p-2 mr-2 rounded-md"
            :class="{
              'bg-orange-500': route.fullPath === '/profile',
              'font-bold': route.fullPath === '/profile',
            }"
          >
            Profile
          </button>
        </router-link>
        <router-link :to="{ name: 'Contact' }">
          <button
            class="hover:font-semibold p-2 mr-2 rounded-md"
            :class="{
              'bg-orange-500': route.fullPath === '/contact',
              'font-bold': route.fullPath === '/contact',
            }"
          >
            Contact
          </button>
        </router-link>
      </div>
    </div>
    <div class="hidden sm:flex items-center justify-end w-1/4">
      <input
        type="text"
        placeholder="Search for movie"
        class="p-2 w-full rounded-lg focus:ring-transparent"
      />
      <svg
        class="w-6 h-6 absolute mr-2 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
    </div>
    <!-- Mobile View -->
    <div
      v-show="show"
      class="
        sm:hidden
        grid grid-cols-1
        gap-y-2
        pl-2
        items-centre
        text-white text-left
      "
    >
      <router-link :to="{ name: 'Home' }">
        <button
          class="hover:font-semibold p-2 mr-2"
          :class="{ 'font-bold': route.fullPath === '/' }"
        >
          Movies
        </button>
      </router-link>
      <router-link :to="{ name: 'Actors' }">
        <button
          class="hover:font-semibold p-2 mr-2"
          :class="{ 'font-bold': route.fullPath === '/actors' }"
        >
          Actors
        </button>
      </router-link>
      <router-link :to="{ name: 'Profile' }">
        <button
          class="hover:font-semibold p-2 mr-2"
          :class="{ 'font-bold': route.fullPath === '/profile' }"
        >
          Profile
        </button>
      </router-link>
      <router-link :to="{ name: 'Contact' }">
        <button
          class="hover:font-semibold p-2 mr-2"
          :class="{ 'font-bold': route.fullPath === '/contact' }"
        >
          Contact
        </button>
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
const route = useRoute();
let show = ref(false);
</script>

<style lang="scss" scoped>
</style>