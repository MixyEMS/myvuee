<template>
  <div id="app">
  {{title}}
     <div class="list_title">
        <ul>
          <li>商品信息</li>
          <li>商品金额</li>
          <li>商品数量</li>
          <li>总金额</li>
          <li>编辑</li>
        </ul>
       </div>
       <div class="list_items">
           <div class="item">
              <div class="item_info" v-for="item in list">
                  <input type="checkbox" name="checkitem">
                  <img  alt="" :src="item.proimg">
                  <span class="iname">{{item.proname}}</span>
                  <span class="present">
                    <span v-for="part in item.parts">{{part.partsname}}<br></span>
                  </span>
              </div>
              <div class="item_price"> {{item.proprice | formatmoney}}</div>
              <div class="item_count">
                  <input type="number" name="itemcount" min="0" :value="item.procount" v-model="item.procount">
              </div>
              <div class="item_totleprice">{{item.proprice*item.procount | formatmoney}}</div>
              <div class="item_edit">
                 <a href="javascript:void(0);" class="delete">删除</a>
              </div>
           </div>
       </div>
       <div class="list_submit">
        <input type="checkbox" name="checkall" class="checkall">
        <a href="javascript:void(0);" class="selectall">全部选择</a>
        <a href="javascript:void(0);" class="canselselect">取消全选</a>
        <a href="javascript:void(0);" class="pay">立即支付</a>
        <span class="totleprice">总计：￥20.00</span>
       </div>
  </div>
</template>

<script>
// 导入组件
// import { mapGetters } from 'vuex'


export default {
  name: 'app',
   data () {
    return {
         title:"haha",
         totalMoney:"0"
    }
  },
  mounted:function(){
       this.$nextTick(function(){
           this.cartView();
       });
  },
  watch: {
       
    },
  computed:{
    list:function(){
          return[];
    }
  },
  filters: {
            formatmoney: function (value) {
              if (!value) return ''
              value = value.toString()
              return "￥"+value.toFixed(2);
            }
          },
  methods:{
             cartView:function(){
                 let _this = this;
                 _this.$http.get("static/jsondata.json",{}).then(res=>{
                       _this.list = res.result.list;
                       _this.totalMoney = res.result.totleMoney;
                       console.log(res);
                 });
             }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
        html{
          font-size:10px;
        }
        *{
          padding:0;
          margin:0;
            position: relative;
            font-family: Microsoft YaHei;
            font-size:1.6rem;
            color:#222;
        }

        #app >div{
          width:100%;
        /*  max-width: 640px;*/
          margin:2rem auto;
          border-bottom:1px solid #ccc;
        }
        ul,li{
          list-style: none;
        }

        .list_title{
          background-color:#333;
          color:#fff;
            font-size:1.8rem;
            text-align: center;
            height: 3rem;
            line-height: 3rem;
        }
        .list_title ul{
          width: 100%;
          height: 100%;
        }
        .list_title li{
          /*padding: 0 15px;*/
          display: inline-block;
          min-width:14%;
          color:#fff;
        }
      .list_title li:first-child{
          width: 40%;
        }  
      .list_items .item{
         text-align: left
      }
      .list_items .item>div{
         display: inline-block;
           width:14%;
           text-align: center;
           vertical-align: middle;
      }
      .list_items .item .item_info{
        width:40%;
        text-align: left;
      }
      .list_items .item .item_info input{
            display: inline-block;
          width: 1.6rem;
          height: 1.6rem;
          top: -2.5rem;
          margin-left:5rem;
      }
         .list_items .item .item_info img{
          max-width: 10rem
         }
          .list_items .item .item_info .iname{
                  display: inline-block;
            width: 50%;
            height: auto;
            max-height: 4rem;
            top: -4.5rem;
            padding-left: 0.5rem;
            text-align: left;
          }
           .list_items .item .item_info .present{
                   display: inline-block;
            width: 50%;
            height: auto;
            margin-left: 15.6rem;
            top: -0.8rem;
            color: #666;
            padding-left: 0.5rem;
            font-size: 1.2rem;
            text-align: left;
          }
           .list_items .item .item_price{
              
              font-size:14px;
           }
           .list_items .item .item_count input{
            display: inline-block;
            max-width: 10rem;
            font-size:1.4rem;
            margin-left:2.2rem;
           }
           .list_items .item .item_totleprice{
             font-size:1.4rem;
             color:red;
           }
           .list_items .item .item_edit .delete{
            display: inline-block;
            max-width: 10rem;
            font-size:1.4rem;
            margin-left:2.2rem;
           }
            .list_submit{
              text-align: left;
            }
            .list_submit *{
              display: inline-block;
              font-size:1.2rem;
              text-decoration: none;
               margin-top: -0.6rem;

            }
            .list_submit a:hover{
              text-decoration: underline;
            }
           .list_submit .checkall{
            display: inline-block;
          width: 1.6rem;
          height: 1.6rem;
          margin-left: 5rem
         }
            .list_submit .selectall{
              
              color:red;
            }
             .list_submit .canselselect{
              color:#666;
             }

              .list_submit .totleprice{
                float: right;
    margin-right: 2rem;
   
              }
              .list_submit .pay{
                    float: right;
    margin-right: 2rem;
    min-width: 10rem;
    text-align: center;
    height: 3rem;
    background-color: red;
    line-height: 3rem;
    color: #fff;
    font-size: 1.4rem;
    margin-top: -1.5rem;
              }
</style>
