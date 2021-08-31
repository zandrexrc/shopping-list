<template>
  <v-app>
    <v-navigation-drawer
        v-model="drawer"
        app
    >
        <v-list>
            <v-subheader>Lists</v-subheader>

            <v-divider class="my-2"></v-divider>

            <v-list-item
                v-for="list in lists"
                :key="list.id"
                link
                @click="setActiveListId(list.id)"
            >
                <v-list-item-content>
                <v-list-item-title v-text="list.name"></v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider class="my-2"></v-divider>

            <v-list-item 
                link
                @click="toggleListForm"
            >
                <v-list-item-content>
                <v-list-item-title>
                    Create new list
                </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

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

    <List />

    <!-- FORMS -->
    <ItemForm />
    <ListForm />

  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters, mapState } from "vuex";
import ItemForm from './components/ItemForm.vue';
import ListForm from './components/ListForm.vue';
import List from './components/List.vue'

export default Vue.extend({
  name: 'App',

  data: () => ({ 
    drawer: null,
  }),

  components: {
    ItemForm,
    ListForm,
    List,
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
      'setActiveListId',
      'toggleItemForm',
      'toggleListForm',
    ]),
  },

});
</script>
