<template>
  <v-navigation-drawer>
    <v-list>
      <v-list-item title="Timetables4Us"></v-list-item>
      <v-list-item>
        <v-btn block @click="$router.push('/')">Home </v-btn>
      </v-list-item>

      <v-list-item>
        <v-btn block @click="$router.push('/login')">Login</v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script setup lang="ts"></script>
