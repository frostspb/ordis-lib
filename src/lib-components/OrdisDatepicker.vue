<script>
export default {
  name: "OrdisDatepicker",
  watch: {
    dt(newValue) {
      this.date= newValue
    }
  },
  props: {
    lbTitle: {
      type: String,
      default: ''
    },
    value: {},
    dt: {}
  },

  methods: {
    setDt(value) {
      this.menu = false;
      this.$emit('change_date', value)
      this.date=value
    }
  },

  data: function() {
    return {
      date: this.dt, 
      menu: false
    }
  }
}
</script>

<template>
    <v-layout>
        <v-flex >
        <v-menu
            :close-on-content-click="false"
            v-model="menu"
            :nudge-right="40"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
        >
            <v-text-field
            slot="activator"
            v-model="date"
            :label="lbTitle"
            prepend-icon="event"
            readonly
            />
            <v-date-picker :value="this.dt" @input="setDt"/>
        </v-menu>
        </v-flex>
    </v-layout>
</template>


