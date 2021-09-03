<template>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title v-text="getActiveListName"></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn 
        icon
        @click="toggleItemForm"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from "vuex";

export default Vue.extend({
  name: 'Appbar',

  computed: {
    ...mapGetters([
      'getActiveListName',
    ]),
  },

  methods: {
    ...mapActions([
      'toggleDrawer',
      'toggleItemForm',
    ]),
  },

});
</script>
