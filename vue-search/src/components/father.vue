<template lang="pug">
    div
      son(@getindex='getIndex')
      .search-input
        input(type="text",v-model="keyword",@keyup="get($event)", @keydown.enter="search()",@keydown.down="selectDown()", @keydown.up.prevent="selectUp()")
        span.search-reset(@click="clearInput()") X
        button.search-btn(@click="search()") 搜索
        .search-select
          transition-group(name="itemfade",tag="ul",mode="out-in" v-cloak)
            li.search-select-option.search-select-list(v-for='(value,index) in myData', :class='{selectback:index==now}', @mouseover='selectHover(index)', @click='selectClick(index)', :key='value') {{value}}
</template>
<script>
  import son from './son'

  export default {
    components: {
      son
    },
    data: function () {
      return{
        myData: [],
        keyword: '',
        now: -1,
        searchIndex: 0,
        logoData: [
          {
            name: '360搜索',
            searchSrc: 'https://www.so.com/s?ie=utf-8&shb=1&src=360sou_newhome&q='
          },
          {
            name: '百度搜索',
            searchSrc: 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd='
          },
          {
            name: '搜狗搜索',
            searchSrc:'https://www.sogou.com/web?query='
          }
        ]
      }
    },
    methods: {
      get: function(ev) {
        if (ev.keycode == 38 || ev.keycode == 40) {
          return;
        }
        this.$http.jsonp('https://sug.so.360.cn/suggest?word=' + this.keyword + '&encodein=utf-8&encodeout=utf-8').then(function(res){
          this.myData = res.data.s
        },function() {

        })
      },
      selectDown: function() {
        this.now++;
        if (this.now == this.myData.length) {
          this.now = 0
        }
        this.keyword = this.myData[this.now]
      },
      selectUp: function() {
        this.now--;
        if (this.now == -1) {
          this.now = this.myData.length - 1
        }
        this.keyword = this.myData[this.now]
      },
      search: function() {
        window.open(this.logoData[this.searchIndex].searchSrc + this.keyword)
      },
      selectHover: function(index) {
        this.now = index
      },
      selectClick: function(index) {
        this.keyword = this.myData[index]
        this.search()
      },
      clearInput: function() {
        this.keyword = ''
        this.$http.jsonp('https://sug.so.360.cn/suggest?word=' + this.keyword + '&encodein=utf-8&encodeout=utf-8').then(function(res) {
          console.log(res);
          this.myData = res.data.s
        },function() {

        })
        this.myData = []
      },
      getIndex: function(index) {
        this.searchIndex = index
      }
    }
  }
</script>
<style lang='scss'>
  .search-input{
    height: 45px;
    width: 600px;
    margin: 0px auto;
    margin-top: 10px;
    position: relative;
    input{
      border: 1px solid #e4e4e4;
      box-sizing: border-box;
      width: 500px;
      height: 45px;
      font-size: 18px;
      float: left;
      padding-left: 10px;
      padding-right: 10px;
      overflow: hidden;
    }
    input::-ms-clear{
      display: none;
    }
    .search-reset{
      width: 21px;
      height: 21px;
      position: absolute;
      display: block;
      line-height: 21px;
      text-align: center;
      cursor: pointer;
      font-size: 20px;
      right: 110px;
      top: 12px
    }
    .search-btn{
      height: 45px;
      width: 100px;
      border: 1px solid mediumseagreen;
      background-color: mediumseagreen;
      color: white;
      font-size: 16px;
      font-weight: bold;
      float: left;
      cursor: pointer;
    }
    .search-select{
      position: absolute;
      top: 45px;
      width: 500px;
      box-sizing: border-box;
      z-index: 999;
      ul{
        margin: 0;
        text-align: left;
        li{
          border: 1px solid #d4d4d4;
          border-top: none;
          border-bottom: none;
          background-color: #fff;
          width: 100%;
          list-style: none;
        }
        .search-select-option {
          box-sizing: border-box;
          padding: 7px 10px;
        }
        .search-select-list {
          transition: all 0.5s
        }
      }
      .itemfade-enter,.itemfade-leave-active {
        opacity: 0;
      }
      .itemfade-leave-active {
        position: absolute;
      }
    }
    [v-cloak] {
      display: none;
    }
  }
</style>
