<template>
    <v-row justify="center">
        <v-dialog
            v-model="itemForm"
            max-width="600px"
            persistent
        >
        <v-card>
            <v-card-title>
                <span class="text-h5">Create item</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-text-field
                            v-model="itemName"
                            label="Name"
                            :rules="itemNameRules"
                            hide-details="auto"
                            required
                        ></v-text-field>
                    </v-row>
                    <v-row>
                        <v-text-field
                            v-model="itemPrice"
                            label="Price"
                            :rules="itemPriceRules"
                            hide-details="auto"
                            required
                        >
                            <span slot="append" v-text="currency"></span>
                        </v-text-field>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    text
                    @click="toggleItemForm"
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
  name: 'ItemForm',

  data: () => ({ 
    itemId: 9,
    itemName: '',
    itemPrice: '',
    itemNameRules: [
        (value: any) => !!value || 'Required',
    ],
    itemPriceRules: [
        (value: any) => !!value || 'Required',
        (value: any) => !isNaN(value) || 'Must be a valid number',
    ],
  }),

  computed: {
    ...mapState([
      'currency',
      'itemForm',
    ]),
  },

  methods: {
    ...mapActions({
      toggleItemForm: 'toggleItemForm',
      addItem: 'addItem',
    }),
    handleSubmit() {
        const isNameValid = !!this.itemName;
        const isPriceValid = !!this.itemPrice && !isNaN(parseFloat(this.itemPrice));

        const newItem = {
            id: `i${this.itemId}`,
            name: this.itemName,
            price: parseFloat(this.itemPrice),
            completed: false,
            listId: this.$store.state.activeListId,
        }

        if (isNameValid && isPriceValid) {
            this.$store.dispatch('addItem', newItem);
            this.itemId++;
            this.itemName = '';
            this.itemPrice = '';
        }
    }
  },
});
</script>
