<template>
  <div
    class="card"
    :style="`background-image: url('${image}'); height: ${height}px`"
    @mouseenter="active = !active"
    @mouseleave="active = !active"
  >
    <h2 :style="active ? '' : 'display: none'">{{description}}</h2>
    <p :style="active ? 'display: none' : ''">{{name}}</p>
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
    description: VueTypes.string.def("description"),
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
  width: 99%;
  border-radius: 6px;
  margin: 10px 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.5), 0 2px 10px 0 rgba(0, 0, 0, 0.5);
  border-bottom: 2px solid $tertiary;
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
  & h2 {
    display: flex;
    width: 100%;
    height: 100%;
    font-weight: 300;
    font-size: 24px;
    justify-content: center;
    align-items: center;
    background: #26262680;
    color: $light;
  }
}
</style>