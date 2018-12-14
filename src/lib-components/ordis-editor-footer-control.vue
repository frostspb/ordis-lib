<script>
import OrdisActionButton from './ordis-action-button.vue'
export default {
  name: "OrdisEditorFooterControl"  ,
  components: { OrdisActionButton },
  props: {
      nextTooltip : {
          type: String,
          default: "Next"
      },

      prevTooltip : {
          type: String,
          default: "Prev"
      },

      saveTooltip : {
          type: String,
          default: "Save"
      },

      closeTooltip : {
          type: String,
          default: "Close"
      },
  },
  methods: {
    nextClick: function() {
      this.$emit('next')
    },
    prevClick: function() {
      this.$emit('prev')
    },
     saveClick: function() {
      this.$emit('save')
    },
    closeClick: function() {
      this.$emit('close')
    }

  }
}
</script>

<template>
<div>
    <v-card-actions class="justify-space-between">
        <ordis-action-button btnIcon="navigate_before" :btnTooltip="prevTooltip" @click="prevClick"/>
        <ordis-action-button
            btnIcon="cancel"
            :btnTooltip="closeTooltip"
            iconColor="red"
            @click="closeClick"
        />
        <ordis-action-button
            btnIcon="done"
            :btnTooltip="saveTooltip"
            iconColor="green"
            @click="saveClick"
        />
        <ordis-action-button btnIcon="navigate_next" :btnTooltip="nextTooltip" @click="nextClick"/>
    </v-card-actions>
</div>
</template>

