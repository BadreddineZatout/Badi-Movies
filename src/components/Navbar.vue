<template>
  <nav
    class="bg-orange-600 py-1 shadow sm:flex sm:flex-wrap sm:items-center sm:justify-between lg:px-12"
  >
    <div class="flex items-center justify-start gap-4">
      <div class="flex items-center">
        <div class="ml-3 sm:hidden">
          <button
            class="mr-3 block h-8 items-center text-white hover:font-bold"
            @click="show = !show"
          >
            <svg
              class="h-6 w-6"
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
          class="h-12 w-12 text-white sm:h-16 sm:w-16"
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
        <h1 class="ml-2 text-lg text-white sm:text-2xl sm:font-bold">
          Badi Movie
        </h1>
      </div>

      <!-- Web View -->
      <div class="items-centre hidden text-white sm:flex">
        <router-link :to="{ name: 'Home' }">
          <button
            class="mr-2 rounded-md p-2 hover:font-semibold"
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
            class="mr-2 rounded-md p-2 hover:font-semibold"
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
            class="mr-2 rounded-md p-2 hover:font-semibold"
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
            class="mr-2 rounded-md p-2 hover:font-semibold"
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
    <div class="hidden w-1/4 items-center justify-end sm:flex">
      <input
        type="text"
        placeholder="Search for movie"
        class="w-full rounded-lg p-2 focus:ring-transparent"
      />
      <svg
        class="absolute mr-2 h-6 w-6 text-gray-400"
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
      class="items-centre grid grid-cols-1 gap-y-2 pl-2 text-left text-white sm:hidden"
    >
      <router-link :to="{ name: 'Home' }">
        <button
          class="mr-2 p-2 hover:font-semibold"
          :class="{ 'font-bold': route.fullPath === '/' }"
        >
          Movies
        </button>
      </router-link>
      <router-link :to="{ name: 'Actors' }">
        <button
          class="mr-2 p-2 hover:font-semibold"
          :class="{ 'font-bold': route.fullPath === '/actors' }"
        >
          Actors
        </button>
      </router-link>
      <router-link :to="{ name: 'Profile' }">
        <button
          class="mr-2 p-2 hover:font-semibold"
          :class="{ 'font-bold': route.fullPath === '/profile' }"
        >
          Profile
        </button>
      </router-link>
      <router-link :to="{ name: 'Contact' }">
        <button
          class="mr-2 p-2 hover:font-semibold"
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

<style lang="scss" scoped></style>
