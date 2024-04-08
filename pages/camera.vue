<template>
  <v-container fluid>
    <v-container class="d-flex flex-column justify-center align-center">
      <v-row>
        <v-col>
          <video
            ref="video"
            id="video"
            autoplay
            playsinline
            muted
            hidden
          ></video>
        </v-col>
      </v-row>
      <v-row id="canvasEl">
        <v-col>
          <canvas ref="canvas" id="canvas" class="bg-color-dark"></canvas>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn
            :href="download.href"
            size="small"
            variant="plain"
            :download="download.fileName"
            prepend-icon="mdi-download-circle-outline"
            >Download Image</v-btn
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn
            variant="plain"
            size="small"
            @click="takePhoto"
            prepend-icon="mdi mdi-camera-outline"
            >Take Photo</v-btn
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          <v-sheet class="pa-5" color="grey-lighten-3">
            <v-sheet class="mx-auto" height="100" width="100">
              <v-img
                class="bg-black"
                height="100"
                width="100"
                :src="img"
              ></v-img>
            </v-sheet>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn
            variant="plain"
            size="small"
            prepend-icon="mdi-file-image-remove"
            @click="deleteImg"
            >Delete Image</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script lang="ts" setup>
import { useCamera } from "~/composables/camera/useCamera";

definePageMeta({
  layout: "plain",
});

const { video, canvas, img, takePhoto, deleteImg, download, openCamera } =
  useCamera();

onMounted(() => {
  openCamera();
});
</script>
