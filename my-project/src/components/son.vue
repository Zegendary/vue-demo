<template lang="pug">
  .main-logo
    img(:src='logoData[selectedNow].imgSrc', v-cloak='')
    span.logoList-arrow(@click='toggleFlag')
    transition(name='logofade', v-cloak='')
      ul.logoList(v-show='logoListFlag')
        li.logoItem(v-for='(logo,index) in logoData', @mouseover='logoListHover(index)', :class='{selectback:index==logoNow}', @click='logoSelected(index)')
          img(:src='logo.imgSrc')
</template>
<script>
  export default {
    data: function() {
      return {
        selectedNow: 0,
        logoNow: -1,
        logoListFlag: false,
        logoData: [
          {imgSrc: '../../static/images/360_logo.png'},
          {imgSrc: '../../static/images/baidu_logo.png'},
          {imgSrc: '../../static/images/sougou_logo.png'}
        ]
      }
    },
    methods: {
      toggleFlag: function() {
        this.logoListFlag = !this.logoListFlag
      },
      logoListHover: function(index) {
        this.logoNow = index
      },
      logoSelected: function(index) {
        this.selectedNow = index;
        this.logoListFlag = false;
        this.$emit('getIndex',this.selectedNow)
      }
    }
  }
</script>
<style type="text/css">
/*css中需加[v-bloak]:{display: none;}告诉vue 有v-bloak这个属性的标签暂时隐藏，vue渲染好了之后再显示*/
[v-bloak]:{display: none;}
ul{list-style: none;padding: 0;margin: 0}
.main-logo {
    width: 600px;
    height: 140px;
    position: relative;
    margin: 0 auto;
}

.main-logo img {
    display: block;
    margin: 0px auto;
}

.logoList-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border: 8px solid;
    border-color: #000 transparent transparent transparent;
    right: 100px;
    top: 66px;
    cursor: pointer
}

.logoList {
    position: absolute;
    top: 100%;
    width: 200px;
    left: 50%;
    margin-left: -100px;
    z-index: 999999;
    border: 1px solid #d4d4d4
}

.logoList li {
    width: 100%;
    height: 80px;
    background-color: #fefefe;
    line-height: 80px;
    padding-top: 1px;
}

.logoList li img {
    width: 100%;
    margin-top: 10px;
}

.logofade-enter-active,
.logofade-leave-active {
    transition: all .5s;
}

.logofade-enter,
.logofade-leave-active {
    opacity: 0;
    transform: translateY(20px);
}
.selectback{background-color: #eee !important;cursor: pointer}
</style>
