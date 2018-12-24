<template>
  <v-layout row>
    <v-flex lg10 offset-lg1 order-lg1>
      <panel title="Songs">
        <v-btn slot="header" fab flat medium darken-4 @click="linkTo({name: 'create-songs'})">
          <v-icon>add</v-icon>
        </v-btn>
        <div v-for="song in songs" :key="song.id" slot="body">
          {{song.title}}
          {{song.artist}}
          {{song.ablum}}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>
<script>
import SongsServices from '@/services/songsServices'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      songs: []
    }
  },
  async mounted () {
    // Do request to the backend for all the songs
    this.songs = (await SongsServices.index()).data
  },
  methods: {
    linkTo (route) {
      this.$router.push(route)
    }
  },
  components: {
    Panel
  }
}
</script>
<style scoped>

</style>
