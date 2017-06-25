<template>
  <div class="main">
    <h1>this is main</h1>
    
  </div>
</template>

<script>
import { HOST_CONCIG, KEY_CONFIG } from '../config/api-config'
export default {
  name: 'main',
  data () {
    return {
      msg: 'Welcome to Mixy weibo.js App'
    }
  },
  methods: {
    oauth () {
      var clientId = KEY_CONFIG.app_key
      var redirectUri = KEY_CONFIG.redirect_uri
      var oauthUrl = HOST_CONCIG.oauth
      window.open(oauthUrl + '?client_id=' + clientId + '&redirect_uri=' + redirectUri, '_self', '', true)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;

}

a {
  color: #42b983;
}
</style>
