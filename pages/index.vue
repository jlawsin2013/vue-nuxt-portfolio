<template>
  <v-container class="bg-color-dark" fluid>
    <v-container>
      <v-row>
        <v-col class="d-flex justify-end bg-img-avatar" cols="12" md="6">
          <NuxtImg
            src="/images/avatar.png"
            quality="80"
            width="250"
            loading="lazy"
            style="position: relative"
          />
        </v-col>
        <v-col cols="12" md="6">
          <p class="text-h5 font-weight-bold text-yellow">
            Hi, I'm John Stephen. Nice to meet you!
          </p>
          <p class="text-h6 text-white pt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in
            nulla eleifend, efficitur urna et, blandit mauris. Vestibulum sed
            ipsum et elit accumsan bibendum non id lacus.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
  <v-container class="py-10" fluid>
    <v-container>
      <v-row>
        <v-col class="v-col-9">
          <p class="text-h4 text-uppercase font-weight-bold">
            8 years+ of experience as Application Developer
          </p>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="my-5">
      <v-row>
        <v-col
          cols="12"
          md="6"
          v-for="(item, index) in workDesc"
          :key="index"
          val
        >
          <p style="font-size: 1.3rem">
            <v-icon icon="mdi-check-decagram" color="green" size="small" />
            {{ item.desc }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Work } from "~/types/index.d.ts";

const workDesc = ref<Work[]>([
  {
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor erat mi, in dapibus magna malesuada vel. Nullam vel pharetra turpis'",
  },
  {
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor erat mi, in dapibus magna malesuada vel. Nullam vel pharetra turpis'",
  },
  {
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor erat mi, in dapibus magna malesuada vel. Nullam vel pharetra turpis'",
  },
  {
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor erat mi, in dapibus magna malesuada vel. Nullam vel pharetra turpis'",
  },
  {
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor erat mi, in dapibus magna malesuada vel. Nullam vel pharetra turpis'",
  },
  {
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor erat mi, in dapibus magna malesuada vel. Nullam vel pharetra turpis'",
  },
]);
</script>
