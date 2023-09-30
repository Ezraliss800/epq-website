<template>
    <v-app>
      
      <Sidebar />
      <AppBar />
      
            <MainContent />
    </v-app>
  </template>
  
  <script lang="ts" setup>
    import AppBar from './AppBar.vue'
    import Sidebar from './Sidebar.vue'
    import MainContent from './MainContent.vue'
  </script>