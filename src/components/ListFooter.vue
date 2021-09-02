<template>
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
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapState } from "vuex";

export default Vue.extend({
  name: 'ListFooter',

  computed: {
    ...mapState([
      'currency',
    ]),

    ...mapGetters([
      'calcTotalPrice',
      'calcUnpaidPrice',
    ]),
  },
});
</script>
