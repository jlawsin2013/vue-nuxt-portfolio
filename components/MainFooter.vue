<template>
  <v-container class="bg-color-gradient" fluid>
    <v-container>
      <v-row>
        <v-col
          class="d-flex flex-column align-center"
          v-for="(item, index) in techStack"
          :key="index"
        >
          <NuxtImg :src="item.image" :width="item.size" :alt="item.alt" />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
  <v-container class="bg-color-dark" fluid>
    <v-container class="text-h4 text-white">
      Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit...
    </v-container>
    <v-container>
      <v-row>
        <v-col v-for="(item, index) in sectionDesc" :key="index">
          <p class="text-caption text-uppercase text-yellow">
            {{ item.title }}
          </p>
          <p class="text-h6 text-white pt-3">
            {{ item.description }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
  <v-container class="d-flex flex-column bg-color-dark py-0" fluid>
    <v-container class="d-flex w-100 align-center">
      <p class="text-copyright text-grey">All rights reserved</p>
      <v-spacer></v-spacer>
      <v-btn
        v-for="(item, index) in socialLinks"
        :key="index"
        :to="item.link"
        :icon="item.icon"
        variant="plain"
        size="small"
        color="#ffffff"
      />
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { SocialLinkTypes, Section, Tech } from "~/types/index.d.ts";

const socialLinks = ref<SocialLinkTypes[]>([
  {
    id: "1",
    link: "/#",
    icon: "mdi-gmail",
  },
  {
    id: "2",
    link: "/#",
    icon: "mdi-linkedin",
  },
  {
    id: "3",
    link: "/#",
    icon: "mdi-instagram",
  },
  {
    id: "4",
    link: "/#",
    icon: "mdi-facebook",
  },
]);

const sectionDesc = ref<Section[]>([
  {
    id: "1",
    title: "Lorem ipsum dolor.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id.",
  },
  {
    id: "2",
    title: "Lorem ipsum dolor.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id.",
  },
  {
    id: "3",
    title: "Lorem ipsum dolor.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id.",
  },
  {
    id: "4",
    title: "Lorem ipsum dolor.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id.",
  },
]);

const techStack = ref<Tech[]>([
  {
    image: "/images/spring.svg",
    size: "100",
    alt: "java logo",
  },
  {
    image: "/images/github.png",
    size: "70",
    alt: "github logo",
  },
  {
    image: "/images/nuxt.svg",
    size: "90",
    alt: "nuxt logo",
  },
  {
    image: "/images/vue.svg",
    size: "35",
    alt: "vue logo",
  },
  {
    image: "/images/vuetify.svg",
    size: "110",
    alt: "vuetify logo",
  },
  {
    image: "/images/typescript.svg",
    size: "30",
    alt: "typescript logo",
  },
]);
</script>
