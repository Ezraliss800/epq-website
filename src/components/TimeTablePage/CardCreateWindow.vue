<template>
  <v-dialog v-model="showdialog">
    <template v-slot:activator="{ props }">
      <v-btn
        fab
        class="fab-container"
        @click="showdialog = true"
        v-bind="props"
        height="40px"
      >
        CREATE NEW CARD
        <v-icon startsize="30" color="primary">mdi-plus</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>Create a new card</v-card-title>
      <v-card-text>
        <v-select
          label="Select A Day"
          :items="[
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ]"
          v-model="day"
        >
        </v-select>
        <v-text-field v-model="subject" label="Subject" />
        <v-text-field v-model="text" label="Text" />
        <v-text-field type="time" v-model="timestart" label="Time Start" />
        <v-text-field type="time" v-model="timeend" label="Time End" />
      </v-card-text>
      <v-card-actions>
        <v-btn @click="createCard()" color="primary">Create</v-btn>
        <v-btn @click="showdialog = false" color="primary">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { data } from "./data";
import { v4 as uuid } from "uuid";
let showdialog = ref(false);
function createCard() {
  showdialog.value = false;
  data[day.value].push({
    name: subject.value,
    text: text.value,
    timestart: timestart.value,
    timeend: timeend.value,
    id: uuid(),
    day: day.value,
    date: date.value,
  });
  date.value = "";
  day.value = "";
  subject.value = "";
  text.value = "";
  timestart.value = "";
  timeend.value = "";
}
const day = ref("");
const subject = ref("");
const text = ref("");
const timestart = ref("");
const timeend = ref("");
const date = ref("");
</script>

<style scoped>
.fab-container {
  position: fixed;
  bottom: 5px;
  right: 5px;
  z-index: 100;
}
</style>
```
