<template lang="pug">
    h3(class='navitem') {{title}}
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { observer } from "mobx-vue";

@Component({
  props: {
    title: String
  }
})
export default class NavBarItem extends Vue {}
</script>

<style lang="less">
.navitem {
  display: flex;
  color: white;
  padding: 5px 10px;
  text-decoration: none;
  justify-content: flex-end;
}
.navitem:hover {
  background-color: #777;
  color: black;
}
</style>
