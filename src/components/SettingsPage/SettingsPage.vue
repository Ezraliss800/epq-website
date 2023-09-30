<template>
  <v-card class="settingscard">
    <v-btn size="x-large" style="padding: 10px" @click="toggleTheme"
      >toggle theme</v-btn
    >

    <v-card-text
      >Click this button to toggle the theme between light and dark
      mode.</v-card-text
    >
  </v-card>
</template>

<style>
.settingscard {
  margin: 100px;
}
</style>
<script setup script lang="ts">
import { useTheme } from "vuetify";
const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
</script>
