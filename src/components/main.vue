<template>
  <div class="main">
    <h1>this is main</h1>
    
  </div>
</template>

<script>
import axios from 'axios';
import { HOST_CONCIG, KEY_CONFIG } from '../config/api-config'
import { getUrlKey } from '../common/string_api'

export default {
  name: 'main',
  data () {
    return {
      msg: 'Welcome to Mixy weibo.js App',
      list:[]
    }
  },
  created (){

    const accesstoken = getUrlKey('code');
    console.log(accesstoken)
    var request_data = {
        access_token: accesstoken,
        count: 30,
        page: 1,
        appkey:KEY_CONFIG.app_key
    }

    var config = {
        method: 'get',
        url: 'https://api.weibo.com/2/statuses/public_timeline.json',
        baseURL: 'https://api.weibo.com/',
        params: request_data,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    axios(config)
        .then(function (response) {
            logger("oauthPost-ok", 'getHomeTimeline response succeed')
            this.list = response;
        })
        .catch(function (error) {
            console.log(error);
        })
  },
  methods: {
   
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
