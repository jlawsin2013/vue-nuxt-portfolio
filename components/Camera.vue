<template>
  <v-row>
    <v-col>
      <video
        ref="value.video"
        id="video"
        autoplay
        playsinline
        muted
        hidden
      ></video>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <canvas
        ref="value.canvas"
        id="canvas"
        width="640"
        height="480"
        class="bg-color-dark"
      ></canvas>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const props = defineProps<{
  video: HTMLElement | null;
  canvas: HTMLCanvasElement | null;
}>();

const { value } = ref(props);
</script>
