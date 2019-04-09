import * as Spotify from 'spotify-web-api-js'
import Cookies from 'js-cookie'

const _spotify = new Spotify()

let cookie = Cookies.get('token')
if(cookie) _spotify.setAccessToken(cookie)

const credentials = {
  clientID: '0a31a2abfc5945bb9e3b3507e6f8361c',
  responseType: 'token',
  redirectURI: 'http://localhost:3000/login',
  state:  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
  showDialog: true,
  scopes: ['streaming', 'user-library-read']
  
}

export const spotify = _spotify 
export const setToken = token => {
  Cookies.set('token', token)
  _spotify.setAccessToken(token)
}

export const removeToken = () => {
  Cookies.clearAll()
  _spotify.removeAccessToken()
}

export const authURL = 'https://accounts.spotify.com/authorize' +
  `?response_type=${credentials.responseType}` +
  `&client_id=${credentials.clientID}` +
  `&redirect_uri=${encodeURIComponent(credentials.redirectURI)}` + 
  `&scope=${credentials.scopes.join('%20')}` +
  `&show_dialog=${credentials.showDialog}` +
  `&state=${credentials.state}`

