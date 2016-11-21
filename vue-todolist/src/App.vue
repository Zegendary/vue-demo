<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <input v-model="newItem" @keyup.enter="addNew">
    <ul>
      <li  v-for="item in items" :class="{ finished:item.isFinished }" @click="toggleFinish(item)">
        {{item.label}}
      </li>
    </ul>
    <component-a msgfromfather="Im Your Father" v-on:msgfromchild='childsay'></component-a>
    <p>
      child say {{childmsg}}
    </p>
  </div>
</template>

<script>
import Storage from './storage.js'
import componentA from './components/componentA'

export default {
  data () {
    return {
      msg: 'Welcome to Your ToDoList',
      items: Storage.fetch() == null ? []: Storage.fetch(),
      newItem: '',
      childmsg: ''
    }
  },
  components:{ componentA },
  watch: {
    items: {
      handler(items){
        Storage.save(items)
      },
      deep: true
    }
  },
  methods: {
    toggleFinish (item) {
      item.isFinished = !item.isFinished
    },
    addNew (){
      this.items.push({
        label: this.newItem,
        isFinished: false
      })
      this.newItem = ''
    },
    childsay (msg){
      this.childmsg = msg
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
.finished{
  text-decoration: underline;
}
p{
  color: deeppink;
}
</style>
