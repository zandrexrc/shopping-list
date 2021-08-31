<template>
    <v-main>
        <v-list>
            <template
                v-for="(item, index) in getActiveListItems"
            >
                <v-list-item :key="item.id">
                    <v-list-item-action>
                    <v-checkbox
                        :input-value="item.completed"
                        color="primary"
                        @click="completeItem(item.id)"
                    ></v-checkbox>
                    </v-list-item-action>

                    <v-list-item-content>
                        <v-list-item-title v-text="item.name"></v-list-item-title>
                        <v-list-item-subtitle v-text="`${currency} ${item.price}`"></v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                        <v-btn 
                            icon
                            @click="deleteItem(item.id)"
                        >
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                    </v-list-item-action>
                </v-list-item>
                <v-divider :key="index"></v-divider>
            </template>
        </v-list>

        <v-footer padless>
            <v-col
                cols="12"
            >
                Unpaid: {{ currency }} {{ calcUnpaidPrice }}
            </v-col>
            <v-col
                cols="12"
            >
                Total: {{ currency }} {{ calcTotalPrice }}
            </v-col>
        </v-footer>
    </v-main>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters, mapState } from "vuex";

export default Vue.extend({
  name: 'List',

  computed: {
    ...mapState([
      'currency',
    ]),

    ...mapGetters([
      'getActiveListItems',
      'calcTotalPrice',
      'calcUnpaidPrice',
    ]),
  },

  methods: {
    ...mapActions([
      'completeItem',
      'deleteItem',
    ]),
  },

});
</script>
