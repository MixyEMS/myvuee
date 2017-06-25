<template>
  <div class="oauth">
    <h1>{{ msg }}</h1>
    <button class="login" v-on:click="oauth">登录</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { HOST_CONCIG, KEY_CONFIG } from '../config/api-config'
import { getUrlKey } from '../common/string_api'
export default {
  name: 'oauth',
  data () {
    return {
      msg: 'Welcome to Mixy weibo.js App',
    }
  },
  computed: {
        code: function () {
            return getUrlKey('code');
        },
        ...mapGetters({
            loginState:'loginState'
        })
    },
  watch: {
      loginState: function (val, oldVal) {
          if (val) {
              this.goMain()
          }
      }
    },
  mounted() {
            if (this.code) {
                this.$store.loginState = true
                this.goMain()
            } 
    },
  methods: {
    oauth () {
      var clientId = KEY_CONFIG.app_key
      var redirectUri = KEY_CONFIG.redirect_uri
      var oauthUrl = HOST_CONCIG.oauth
      window.open(oauthUrl + '?client_id=' + clientId + '&redirect_uri=' + redirectUri, '_self', '', true)
    },
    goMain (){
         let vue = this
         setTimeout(function () {
                vue.$router.replace({ name: 'main' });
            }, 2000)
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
