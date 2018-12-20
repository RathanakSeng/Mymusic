/**
 * Use to hitting the register end point
 */
import api from '@/services/api'

export default {
  register (credentails) {
    return api().post('register', credentails)
  },
  login (credentails) {
    return api().post('login', credentails)
  }
}

/**
 * How to call the method
 * authenticationServices.register({
 *  key: value,
 *  key: value
 * })
 */
