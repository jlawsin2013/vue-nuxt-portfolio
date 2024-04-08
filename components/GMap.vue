<script setup lang="ts">
// import { ref, onMounted } from "vue";

// const { $loader }: any = useNuxtApp();
// const map = ref<HTMLElement>();
// const version = ref<String>();

// async
// onMounted(() => {
// const { Map } = await $loader.importLibrary("maps");
// map.value = new Map(document.getElementById("map") as HTMLElement, {
//   center: new google.maps.LatLng(35, 135),
//   zoom: 12,
// });
// version.value = google.maps.version;
// });
</script>

<template>
  <div class="font-bold">Google map version: {{ "#" }}</div>
  <div id="map"></div>
</template>
