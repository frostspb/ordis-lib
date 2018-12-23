<script>
export default {
  name: "OrdisCardPage"  ,
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
    <v-card class="elevation-20">
        <v-toolbar   dense>
          <v-toolbar-title >
            <v-icon>{{ pageIcon }}</v-icon>{{ pageTitle }}
          </v-toolbar-title>
          <v-spacer/>
          <slot name="menu"></slot>
        </v-toolbar>
        <div class="ordis_page_content">
            <slot name="content"></slot>
        </div>  
    </v-card>
  </div>
</template>

<style scoped>
.ordis_page_content {
  padding-top: 0.3%;
}
</style>
