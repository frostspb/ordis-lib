<script>
export default {
  name: "OrdisToolbarMenuItem",
  methods: {
    itemClick: function() {
      this.$emit("click");
    }
  },
  props: {
    itemIcon: {
      type: String,
      default: "help_outlinr"
    },

    itemTitle: {
      type: String,
      default: ""
    },
    itemColor: {
      type: String,
      default: undefined
    }
  }
};
</script>

<template>
  <div>
    <v-list-tile>
      <v-btn flat @click="itemClick">
        <v-icon :color="itemColor">{{ itemIcon }}</v-icon>
        &nbsp; {{ itemTitle }}
      </v-btn>
    </v-list-tile>
  </div>
</template>