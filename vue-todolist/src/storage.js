const STORAGE_KEY = 'ToDoList'
export default {
  fetch: function (){
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY || []))
  },
  save: function(items) {
    items = JSON.stringify(items)
    window.localStorage.setItem(STORAGE_KEY,items)
  }
}
