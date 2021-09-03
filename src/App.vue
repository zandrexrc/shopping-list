<template>
  <v-app>
    <!-- SIDEBAR -->
    <v-navigation-drawer
        :value="drawer"
        app
    >
      <Sidebar />
    </v-navigation-drawer>

    <!-- APP BAR -->
    <Appbar />

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
import { mapActions, mapState } from "vuex";
import Appbar from './components/Appbar.vue';
import ItemForm from './components/ItemForm.vue';
import List from './components/List.vue';
import ListForm from './components/ListForm.vue';
import ListFooter from './components/ListFooter.vue';
import Sidebar from './components/Sidebar.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Appbar,
    ItemForm,
    List,
    ListForm,
    ListFooter,
    Sidebar,
  },

  computed: {
    ...mapState([
      'drawer',
      'lists',
    ]),
  },

  methods: {
    ...mapActions([
      'toggleDrawer',
    ]),
  },

});
</script>
