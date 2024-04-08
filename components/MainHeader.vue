<template>
  <v-app-bar flat color="#1a1a1a" scroll-behavior="hide">
    <v-container class="d-flex align-center justify-center">
      <NuxtImg
        src="/logo/header.png"
        quality="80"
        sizes="sm:35vw md:100px lg:200px"
        to="/"
      />
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="(item, index) in menus"
          :key="index"
          :prepend-icon="item.icon"
          :to="item.link"
          variant="plain"
          class="text-white"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-menu>
        <template #activator="{ props }">
          <v-btn
            v-bind="props"
            icon="mdi-dots-vertical"
            variant="plain"
            color="#ffffff"
            class="hidden-md-and-up"
          ></v-btn>
        </template>
        <v-list theme="dark">
          <v-list-item
            v-for="(item, index) in menus"
            :key="index"
            :value="index"
          >
            <v-list-item-title>
              <v-btn
                variant="plain"
                :prepend-icon="item.icon"
                :to="item.link"
                class="text-white"
                nuxt
              >
                {{ item.title }}
              </v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-container>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Header } from "~/types/index.d.ts";

const menus = ref<Header[]>([
  {
    title: "Support me",
    link: "/products",
    icon: "mdi-cart",
  },
  {
    title: "Lets connect",
    link: "/contact",
    icon: "mdi-human-greeting",
  },
  {
    title: "Take a photo",
    link: "/camera",
    icon: "mdi-camera",
  },
]);
</script>
