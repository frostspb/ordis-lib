<script>
export default {
  name: "OrdisCardPage"  ,
  components: {},
  props: {
    pageIcon: {
      type: String,
      default: 'home'
    },
    pageTitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<template>
  <div>
    <v-card>
        <v-toolbar   dense>
          <v-toolbar-title >
            <v-icon>{{ pageIcon }}</v-icon>&nbsp;&nbsp;&nbsp;{{ pageTitle }}
          </v-toolbar-title>
          <v-spacer></v-spacer>
           <slot name="menu"></slot> 
        </v-toolbar>
        <div class="ordis_page_cont">
            <slot name="content"></slot>
        </div>  
    </v-card>
  </div>
</template>

<style scoped>
.ordis_page_cont {
  padding-top: 0.3%;
}
</style>
