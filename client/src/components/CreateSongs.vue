<template>
    <v-form ref="form" v-model="valid" lazy-validation>
        <v-layout row>
            <v-flex lg4 md12 sm5>
                <panel title="Song Metadata">
                    <div slot="body">
                        <v-text-field
                            type="text"
                            v-model="title"
                            :rules="requireRules"
                            label="Title"
                            required
                        ></v-text-field>
                        <v-text-field
                            type="text"
                            v-model="artist"
                            :rules="requireRules"
                            label="Artist"
                            required
                        ></v-text-field>
                        <v-text-field
                            type="text"
                            v-model="ablum"
                            :rules="requireRules"
                            label="Ablum"
                            required
                        ></v-text-field>
                        <v-text-field
                            type="text"
                            v-model="ablumImageUrl"
                            :rules="requireRules"
                            label="Ablum image url"
                            required
                        ></v-text-field>
                        <v-text-field
                            type="text"
                            v-model="youtubeId"
                            :rules="requireRules"
                            label="Youtube ID"
                            required
                        ></v-text-field>
                    </div>
                </panel>
            </v-flex>
            <v-flex lg8 md12 sm12 ml-1>
                <panel title="Song Structure">
                    <div slot="body">
                        <v-textarea
                            type="text"
                            v-model="lyrics"
                            label="Lyric"
                        ></v-textarea>
                        <v-textarea
                            type="text"
                            v-model="tab"
                            label="Tab"
                        ></v-textarea>
                    </div>
                </panel>
            </v-flex>
            <v-btn @click="addSong" :disabled="!valid" class="amber darken-2" dark>Add</v-btn>
        </v-layout>
    </v-form>
</template>
<script>
import Panel from '@/components/Panel'
import songsServices from '@/services/songsServices'
export default {
  data () {
    return {
      valid: true,
      title: '',
      artist: '',
      genre: '',
      ablum: '',
      ablumImageUrl: '',
      youtubeId: '',
      lyrics: '',
      tab: '',
      requireRules: [
        v => !!v || 'required'
      ]
    }
  },
  methods: {
    async addSong () {
      if (this.$refs.form.validate()) {
        const songs = await songsServices.add({
          title: this.title,
          artist: this.artist,
          genre: this.genre,
          ablum: this.ablum,
          ablumImageUrl: this.ablumImageUrl,
          youtubeId: this.youtubeId,
          lyrics: this.lyrics,
          tab: this.tab
        })
        console.log(songs)
      }
    }
  },
  components: {
    Panel
  }
}
</script>
