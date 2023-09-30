<template>
  <v-app-bar>
    <v-spacer />
    <v-list>
      <v-list-item> </v-list-item>
    </v-list>
  </v-app-bar>
</template>

<script setup lang="ts"></script>
<style scoped>
.navigation {
  margin-left: 60%;
}
.loginicon {
  padding: 10px;
  align-self: center;
}
</style>

<!-- 


we need a variable that stores the month and the year
make the previous button decrease the month by 1
make the next button increase the month by 1
if they are on the first month of the year and they press the previous button then it should go to the last month of the previous year
if they are on the last month of the year and they press the next button then it should go to the first month of the next year
display the month and year at the top of the page where it says navigation
in each card we have a date property that stores the month and year of the card 
when the cards are loaded they should only appear on the timetable page if they match the month and year at the top of the page




 -->
