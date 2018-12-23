<script>
export default {
  name: "OrdisNavItem",
  props: {
    itemIcon: {
      type: String,
      default: "help_outline"
    },
    itemLink: {
      type: String,
      default: "#"
    },
    itemTitle: {
      type: String,
      default: ""
    },
    itemTarget: {
      type: String,
      default: undefined
    }
  }
};
</script>

<template>
  <div>
    <v-list-tile>
      <v-list-tile-action>
        <v-icon>{{ itemIcon }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-btn flat :href="itemLink" :target="itemTarget">{{ itemTitle }}</v-btn>
      </v-list-tile-content>
    </v-list-tile>
  </div>
</template>
