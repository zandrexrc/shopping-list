<template>
    <v-row justify="center">
        <v-dialog
            v-model="itemForm"
            max-width="600px"
            persistent
        >
        <v-card>
            <v-card-title>
                <span class="text-h5">Add item</span>
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
                            @keyup.enter="handleSubmit"
                        ></v-text-field>
                    </v-row>
                    <v-row>
                        <v-text-field
                            v-model="itemPrice"
                            label="Price"
                            :rules="itemPriceRules"
                            hide-details="auto"
                            required
                            @keyup.enter="handleSubmit"
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
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        (value: any) => !!value || 'Required',
    ],
    itemPriceRules: [
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        (value: any) => !!value || 'Required',
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
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
