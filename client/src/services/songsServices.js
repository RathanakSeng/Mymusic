/**
 * Use to retrive songs end point
 */
import api from '@/services/api'

export default {
  index () {
    // Is used for /songs
    return api().get('songs')
  },
  add (song) {
    // Is used for /songs/:id
    return api().post('songs', song)
  }
}

/**
 * How to call the method
 * songServices.get()
 */
