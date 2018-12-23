<script>
import OrdisEditorFooterControl from './OrdisEditorFooterControl.vue'
import OrdisActionButton from './OrdisActionButton.vue'

export default {
  components: {
    OrdisActionButton,
    OrdisEditorFooterControl
  },
  props: {
      windowTitle: {
          type: String,
          default: ''
      },
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
    next() {
        this.$emit('next')
    },
    prev() {
        this.$emit('prev')
    },
    close() {
        this.$emit('close')
    },

    save() {
        this.$emit('save')
    }
  }
}
</script>

<template>
  <v-card flat>
    <v-system-bar window>
      <v-toolbar-title >
        <v-icon>edit</v-icon>{{ windowTitle }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <OrdisActionButton btn-icon="close" btn-tooltip="Закрыть" @click="close"/>
    </v-system-bar>  
    <slot/>
    <OrdisEditorFooterControl 
      @next="next" 
      @prev="prev" 
      @close="close" 
      @save="save"
      :nextTooltip="nextTooltip"
      :prevTooltip="prevTooltip"
      :closeTooltip="closeTooltip"
      :saveTooltip="saveTooltip"
    />
  </v-card>
</template>