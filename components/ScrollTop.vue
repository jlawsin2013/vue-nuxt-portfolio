<template>
  <div class="scroll">
    <div class="ma-4" v-scroll="onScroll">
      <v-btn
        v-if="isVisible"
        icon="mdi-chevron-up"
        variant="elevated"
        @click="scrollTop"
      >
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isVisible = ref<boolean>(false);

const onScroll = (): void => {
  isVisible.value = window.scrollY > 200;
};

const scrollTop = (): void => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
</script>
