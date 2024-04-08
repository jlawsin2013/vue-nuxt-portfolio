<template>
  <v-container class="d-flex flex-column">
    <v-container class="d-flex w-100 align-center">
      <NuxtImg
        src="/logo/header.png"
        quality="80"
        sizes="sm:35vw md:100px lg:200px"
        to="/"
      />
      <v-spacer></v-spacer>
      <NuxtLink to="/" @click.native="resetStore">
        <v-icon icon="mdi-close-circle-outline" color="#f57e12" />
      </NuxtLink>
    </v-container>

    <v-divider class="border-opacity-100" color="#f57e12"></v-divider>
  </v-container>
</template>

<script setup lang="ts">
import { getActivePinia } from "pinia";

const resetStore = () => {
  const activepinia = getActivePinia();
  if (activepinia) {
    Object.entries(activepinia.state.value).forEach(([storeName, state]) => {
      const storeDefinition = defineStore(storeName, state);
      const store = storeDefinition(activepinia);
      store.$reset();
    });
  }
};
</script>
