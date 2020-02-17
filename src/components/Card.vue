<template>
  <div
    :style="`background-image: url('${image}'); height: ${height}px`"
    @mouseenter="active = !active"
    @mousedown="active = !active"
  >
    <p :style="`font-size: ${fontSize}px; height: ${Size}px;`">{{name}}</p>
  </div>
</template>

<script>
import VueTypes from "vue-types";
import image from "../assets/images/placeholder.jpg";

export default {
  name: "Card",
  props: {
    image: VueTypes.string.def(image),
    name: VueTypes.string.def("your name"),
    fontSize: VueTypes.number.def(16),
    Size: VueTypes.number.def(50),
    height: VueTypes.number.def(380)
  },
  data() {
    return {
      active: false
    };
  }
};
</script>

<style lang="scss" scoped>
div {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 10px;
  height: 380px;
  max-width: 47.7%;
  width: 100%;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  & p {
    display: flex;
    font-size: 16px;
    height: 50px;
    align-items: center;
    font-weight: 300;
    background: #26262680;
    border-radius: 6px;
    width: 100%;
    color: $light;
    padding-left: 10px;
  }
}
</style>