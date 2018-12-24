<template>
  <div class="white elevation-3">
    <v-toolbar flat dense class="amber darken-2" dark>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-spacer/>
      <slot name="header"></slot>
    </v-toolbar>
    <div class="pl-4 pr-4 pt-2 pb2">
      <slot name="body">
          <!--Is use to store the additional data-->
          No Content
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    'title'
  ]
}
</script>
<style>

</style>
