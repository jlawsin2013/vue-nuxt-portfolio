<template>
  <v-row>
    <v-col>
      <video id="video" autoplay playsinline muted hidden></video>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <canvas
        id="canvas"
        width="640"
        height="480"
        class="bg-color-dark"
      ></canvas>
    </v-col>
  </v-row>
</template>

<script setup lang="ts"></script>
