<template>
  <v-container fluid>
    <v-container class="d-flex flex-column justify-center align-center">
      <v-row>
        <v-avatar size="x-large">
          <NuxtImg src="/images/avatar.png" quality="80" />
        </v-avatar>
      </v-row>
      <v-row>
        <v-col>
          <p class="text-h4 font-weight-bold">Hi, I'm John.</p>
        </v-col>
      </v-row>
      <v-row class="mt-0">
        <v-col>
          <p class="text-h4 font-weight-bold">How may I help you today?</p>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
  <v-container fluid>
    <v-container class="d-flex flex-column">
      <v-form>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              :counter="10"
              label="First name"
              prepend-inner-icon="mdi mdi-account"
              required
              hide-details
            ></v-text-field>
          </v-col>
          <v-col class="pb-0" cols="12" md="6">
            <v-file-input
              accept="image/png, image/jpeg, image/bmp"
              placeholder="Pick an avatar"
              prepend-icon="mdi-file-image"
              label="Avatar"
            ></v-file-input>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              :counter="10"
              label="Phone number"
              required
              prepend-inner-icon="mdi mdi-phone"
              hide-details
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="E-mail"
              prepend-inner-icon="mdi mdi-email"
              hide-details
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-textarea
              label="Your message"
              prepend-inner-icon="mdi mdi-chat"
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="v-col-md-4 offset-md-8">
            <v-btn
              type="submit"
              block
              text="Submit"
              color="#f57e12"
              prepend-icon="mdi mdi-send"
              size="large"
            ></v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "plain",
});
</script>
