<template>
  <h1>{{title}} {{city}}</h1>
</template>

<script>
import VueTypes from "vue-types";

export default {
  name: "Title",
  props: {
    title: VueTypes.string.def("Title Example"),
    city: VueTypes.string.def("")
  }
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  font-weight: 200 !important;
  margin: 20px 0 10px;
  padding: 2px 0;
  color: $light !important;
  font-size: 24px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.5), 0 2px 10px 0 rgba(0, 0, 0, 0.5);
  width: 99.2%;
  border-top: 2px solid $tertiary;
  border-radius: 6px;
}
</style>