<template>
  <div
    :style="`background-image: url('${image}')`"
    @mouseenter="active = !active"
    @mousedown="active = !active"
  >
    <p>{{name}}</p>
  </div>
</template>

<script>
import VueTypes from "vue-types";
import image from "../assets/images/placeholder.jpg";

export default {
  name: "Featured",
  props: {
    image: VueTypes.string.def(image),
    name: VueTypes.string.def("your name")
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
  height: 210px;
  width: 100%;
  border-radius: 6px;
  margin: 5px;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.5), 0 2px 10px 0 rgba(0, 0, 0, 0.5);
  & p {
    display: flex;
    font-size: 12px;
    align-items: center;
    font-weight: 300;
    background: #26262680;
    border-radius: 6px;
    width: 100%;
    height: 30px;
    color: $light;
    padding-left: 10px;
  }
}
</style>