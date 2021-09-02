<template>
    <v-row justify="center">
        <v-dialog
            v-model="listForm"
            max-width="600px"
            persistent
        >
        <v-card>
            <v-card-title>
                <span class="text-h5">Create list</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-text-field
                            v-model="listName"
                            label="Name"
                            :rules="listNameRules"
                            hide-details="auto"
                            required
                            @keyup.enter="handleSubmit"
                        ></v-text-field>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    text
                    @click="toggleListForm"
                >
                    Cancel
                </v-btn>
                <v-btn
                    color="primary"
                    text
                    @click="handleSubmit"
                >
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
    </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapState } from "vuex";

export default Vue.extend({
  name: 'ListForm',

  data: () => ({ 
    listId: 3,
    listName: '',
    listNameRules: [
        (value: any) => !!value || 'Required',
    ],
  }),

  computed: {
    ...mapState([
      'listForm',
    ]),
  },

  methods: {
    ...mapActions([
      'toggleListForm',
      'addList',
    ]),
    handleSubmit() {
        const newList = {
            id: `l${this.listId}`,
            name: this.listName,
        }

        if (this.listName) {
            this.$store.dispatch('addList', newList);
            this.listId++;
            this.listName = '';
        }
    }
  },
});
</script>
