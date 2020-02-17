<template>
  <div
    class="card"
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
  name: "Models",
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
.card {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 380px;
  width: 98%;
  border-radius: 6px;
  margin: 10px;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.5), 0 2px 10px 0 rgba(0, 0, 0, 0.5);
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