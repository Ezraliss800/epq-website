<template>
  <v-navigation-drawer>
    <v-list>
      <v-list-item class="titletext"><span>Timetables4Us</span></v-list-item>
      <v-list-item>
        <v-btn class="icon" size="200" block @click="$router.push('/')"
          ><v-icon start size="80" color="primary"> mdi-home</v-icon>
          <span class="buttontext">Home</span>
        </v-btn>
      </v-list-item>

      <v-list-item>
        <v-btn
          class="icon"
          size="200"
          block
          @click="$router.push('/timetable')"
        >
          <v-icon start size="80" color="primary"> mdi-timetable </v-icon
          ><span class="buttontext">Timetable</span></v-btn
        >
      </v-list-item>

      <v-list-item>
        <v-btn class="icon" size="200" block @click="$router.push('/settings')">
          <v-icon start size="80" color="primary">mdi-cog </v-icon
          ><span class="buttontext">Settings</span></v-btn
        >
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script setup lang="ts"></script>
<style scoped>
.buttontext {
  padding: 5px;

  font-size: x-large;
}
.icon {
  padding: 5px;
  align-self: center;
}
.titletext {
  font-size: 30px;
}
</style>
