<template>
  <router-link :to="`/${city}/${id}`" class="card">
    <div
      class="card-model"
      :style="`background-image: url('${image}'); height: ${height}vh`"
      @mouseenter="active = !active"
      @mouseleave="active = !active"
    >
      <h2 :style="active ? '' : 'display: none'">{{description}}</h2>
      <p :style="active ? 'display: none' : ''">{{name}}</p>
    </div>
  </router-link>
</template>

<script>
import VueTypes from "vue-types";
import image from "../assets/images/placeholder.jpg";

export default {
  name: "Card",
  props: {
    image: VueTypes.string.def(image),
    name: VueTypes.string.def("your name"),
    description: VueTypes.string.def("description"),
    fontSize: VueTypes.number.def(16),
    Size: VueTypes.number.def(50),
    height: VueTypes.number.def(35),
    id: VueTypes.number.isRequired
  },
  data() {
    return {
      active: false
    };
  },
  computed: {
    city() {
      return this.$store.getters.params;
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
}
.card-model {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 10px 5px 20px;
  height: 380px;
  max-width: 100%;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  border-bottom: 2px solid $tertiary;
  box-shadow: $shadow;
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
    justify-content: center;
    align-items: center;
    font-weight: 300;
    font-size: 22px;
    background: #26262680;
    color: $light;
    text-align: center;
  }
}
</style>