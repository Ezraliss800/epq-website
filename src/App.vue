<script setup lang="ts">
import { ref } from 'vue'
import Sidebar from '@/components/Sidebar/Sidebar.vue'
import AppBar from '@/components/AppBar/AppBar.vue'
import MainContent from '@/components/MainContent/MainContent.vue'
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar color="primary" prominent>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>My files</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn variant="text" icon="mdi-magnify"></v-btn>

      <v-btn variant="text" icon="mdi-filter"></v-btn>

      <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" location="bottom" temporary>
      <v-list :items="items"></v-list>
    </v-navigation-drawer>

    <v-main style="height: 500px">
      <v-card-text>
        The navigation drawer will appear from the bottom on smaller size screens.
      </v-card-text>
    </v-main>
    <!-- <Sidebar />
    <AppBar />

    <v-main>
      <v-container fluid> <MainContent /> </v-container>
    </v-main> -->
  </v-layout>
</template>

<style scoped></style>
