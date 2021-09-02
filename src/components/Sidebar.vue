<template>
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
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapState } from "vuex";

export default Vue.extend({
  name: 'Sidebar',

  computed: {
    ...mapState([
      'lists',
    ]),
  },

  methods: {
    ...mapActions([
      'setActiveListId',
      'toggleListForm',
    ]),
  },

});
</script>
