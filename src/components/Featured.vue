<template>
  <div
    :style="`background-image: url('${image}')`"
    @mouseenter="active = !active"
    @mouseleave="active = !active"
    :class="active ? 'active' : ''"
  >
    <h2 :style="active ? '' : 'display: none'">{{description}}</h2>
    <p :style="active ? 'display: none' : ''">{{name}}</p>
  </div>
</template>

<script>
import VueTypes from "vue-types";
import image from "../assets/images/placeholder.jpg";

export default {
  name: "Featured",
  props: {
    image: VueTypes.string.def(image),
    name: VueTypes.string.def("your name"),
    description: VueTypes.string.def("description")
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
  border-bottom: 2px solid $tertiary;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.5), 0 2px 10px 0 rgba(0, 0, 0, 0.5);
  transition: all 0.6s;
  &:hover {
    width: 250%;
    transition: all 0.6s;
  }
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
  & h2 {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: $light;
    font-weight: 300;
    font-size: 22px;
    text-align: center;
    padding: 0 10px;
    background: #26262680;
    transition: all 0.3s;
  }
  transition: all 0.3s;
}
</style>