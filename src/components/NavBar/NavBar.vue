<template lang="pug">
    div(class="NavBar")
      span(class="logo") Logo
      div(v-for="item in store.navbarItems")
        NavbarItem( :title="item") 
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import NavbarItem from "./NavbarItem.vue";
import NavBarStore from "@/store/NavBar.mobx.ts";
import { observer } from "mobx-vue";

@observer
@Component({
  components: {
    NavbarItem
  }
})
export default class NavBar extends Vue {
  store = new NavBarStore();
}
</script>

<style lang="less" scoped>
.NavBar {
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: #ccc;
  height: 35px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
// .NavBar > div {
//   display: flex;
//   justify-content: flex-end;
// }
</style>
