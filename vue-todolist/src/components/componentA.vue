<template lang="html">
  <div class="hello">
    <h1>{{msg}}</h1>
    <h2>{{msgfromfather}}</h2>
    <button type="button" name="button" @click="onClickHim">boy say!</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      msg: "hello from component a",
      childmsg: "Im Your Son"
    }
  },
  props:['msgfromfather'],
  methods:{
    onClickHim:function() {
      this.$emit('msgfromchild',this.childmsg)
    }
  }
}
</script>

<style lang="css">
h1{
  color: mediumseagreen;
}
h2{
  color: orangered;
}
</style>
