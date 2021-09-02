<template>
  <v-app>
    <!-- SIDEBAR -->
    <v-navigation-drawer
        v-model="drawer"
        app
    >
      <Sidebar />
    </v-navigation-drawer>

    <!-- APP BAR -->
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title v-text="getActiveListName"></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn 
        icon
        @click="toggleItemForm"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- MAIN -->
    <v-main>
      <List />
      <ListFooter />
    </v-main>

    <!-- MODALS -->
    <ItemForm />
    <ListForm />

  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters, mapState } from "vuex";
import ItemForm from './components/ItemForm.vue';
import List from './components/List.vue';
import ListForm from './components/ListForm.vue';
import ListFooter from './components/ListFooter.vue';
import Sidebar from './components/Sidebar.vue';

export default Vue.extend({
  name: 'App',

  data: () => ({ 
    drawer: null,
  }),

  components: {
    ItemForm,
    List,
    ListForm,
    ListFooter,
    Sidebar,
  },

  computed: {
    ...mapState([
      'lists',
    ]),

    ...mapGetters([
      'getActiveListName',
    ]),
  },

  methods: {
    ...mapActions([
      'toggleItemForm',
    ]),
  },

});
</script>
