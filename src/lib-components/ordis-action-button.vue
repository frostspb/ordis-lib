<script>
export default {
  name: "OrdisActionButton", // vue component name
  props: {
    btnIcon: {
      type: String,
      default: "home"
    },

    btnTooltip: {
      type: String,
      default: ""
    },
    iconColor: {
      type: String,
      default: undefined
    }
  },
  methods: {
    btnClick: function() {
      this.$emit("click");
    }
  }
};
</script>

<template>
  <div>
    <!--  IF tooltip is not empty-->
    <v-tooltip v-if="btnTooltip!=''" bottom slot="activator">
      <v-btn slot="activator" @click="btnClick" icon>
        <v-icon :color="iconColor">{{ btnIcon }}</v-icon>
      </v-btn>
      <span>{{ btnTooltip }}</span>
    </v-tooltip>
    <!-- ELSE tooltip is empty -->
    <v-btn v-else slot="activator" @click="btnClick" icon>
      <v-icon :color="iconColor">{{ btnIcon }}</v-icon>
    </v-btn>
  </div>
</template>

