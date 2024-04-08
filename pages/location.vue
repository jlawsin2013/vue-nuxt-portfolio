<template>
  <v-container id="mapEl" style="height: 500px"></v-container>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "plain",
});

import { ref, onMounted } from "vue";
import "leaflet/dist/leaflet.css";
import L, { type LatLngExpression } from "leaflet";

const zoom = ref<number>(12);
const center = ref<LatLngExpression>([51.505, -0.09]);
const map = ref<L.Map>();
const tile = {
  url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  attribution:
    "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
};

onMounted(() => {
  map.value = L.map("mapEl").setView(center.value, zoom.value);
  L.tileLayer(tile.url, {
    maxZoom: 13,
    attribution: tile.attribution,
  }).addTo(map.value);
});
</script>
