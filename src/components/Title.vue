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
  box-shadow: $shadow;
  width: 99.2%;
  border-top: 2px solid $tertiary;
  border-radius: 6px;
  background: linear-gradient(315deg, #333333, #2b2b2b);
}
@media only screen and (max-width: 450px) {
  h1 {
    font-size: 18px;
    width: 99%;
    margin: 0 auto 5px auto;
    padding-top: 5px;
    padding-bottom: 5px;
  }
}
@media only screen and (max-width: 321px) {
  h1 {
    font-size: 18px;
    width: 99%;
    margin: 0 auto 5px auto;
    padding-top: 5px;
    padding-bottom: 5px;
  }
}
</style>