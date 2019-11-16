<template lang="pug">
div
  NavBar
  TodoList

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TodoList from "./components/TodoList.vue";
import NavBar from "./components/NavBar/NavBar.vue";
import { observer } from "mobx-vue";

@observer
@Component({
  components: {
    TodoList,
    NavBar
  }
})
export default class App extends Vue {}
</script>

<style lang="less">
body,
html {
  margin: 0;
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  padding: 0px;
}
</style>
