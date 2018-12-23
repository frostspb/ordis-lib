<script>
export default {
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
      <v-system-bar window>
        <v-toolbar-title >
          <v-icon>{{ pageIcon }}</v-icon>{{ pageTitle }}
        </v-toolbar-title>
        <v-spacer/>
        <slot name="menu"/>
        
      </v-system-bar>  
        
      <div >
          <slot name="content"/>
      </div>  
    </v-card>
  </div>
</template>