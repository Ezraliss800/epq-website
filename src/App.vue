<script setup lang="ts">
import { ref } from 'vue'
import Sidebar from '@/components/Sidebar/Sidebar.vue'
import AppBar from '@/components/AppBar/AppBar.vue'
import MainContent from '@/components/MainContent/MainContent.vue'
</script>

<template>
  <v-layout class="rounded rounded-md">
    <Sidebar />
    <AppBar />

    <MainContent />
  </v-layout>
</template>

<style scoped></style>
