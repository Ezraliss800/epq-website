<template>
  <CardCreateWindow />
  <v-container fluid>
    <v-row>
      <v-col v-for="day of days" :key="day">
        <span class="days">{{ day }}</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="day of days" :key="day">
        <Card
          v-for="card of data[day]"
          :key="card.id"
          :timestart="card.timestart"
          :timeend="card.timeend"
          :subject="card.name"
          :text="card.text"
          :id="card.id"
          :day="card.day"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import CardCreateWindow from "./CardCreateWindow.vue";
import Card from "./Card.vue";
import { data } from "./data";
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
</script>
<style scoped>
.days {
  position: fixed;
  z-index: 100;
}
</style>

<!-- a interactive notebook
where cards can be added and colour coded to each subject
time can be set in the top left of the card
a button to create a new card on each day of said week 
at the top a navigation menu for each week of the month per year  -->
