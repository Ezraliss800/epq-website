<template>
  <v-card
    @mouseover="ishovering = true"
    @mouseleave="ishovering = false"
    class="card"
  >
    <template #title
      >{{ $props.subject
      }}<v-btn
        @click="deleteCard()"
        v-if="ishovering == true"
        rounded
        size="30px"
        class="btn"
        ><v-icon color="error">mdi-close</v-icon></v-btn
      >
    </template>
    <template #subtitle>{{ $props.timestart }}-{{ $props.timeend }}</template>
    <template #text>{{ $props.text }}</template>
  </v-card>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { data } from "./data";

function deleteCard() {
  data[props.day] = data[props.day].filter((card: any) => card.id != props.id);
}

const ishovering = ref(false);
const props = defineProps([
  "timestart",
  "timeend",
  "subject",
  "text",
  "id",
  "day",
]);
</script>
<style scoped>
.card {
  margin: 10px;
}
.btn {
  float: right;
  margin: 0px;
  padding: 0px;
}
</style>
