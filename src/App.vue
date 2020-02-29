<template>
  <transition>
    <div id="app">
      <router-view />
    </div>
  </transition>
</template>

<script>
export default {
  name: "App",
  created() {
    this.$store.dispatch("getModels");
    this.$store.dispatch("getCities");
  }
};
</script>

<style lang="scss">
* {
  font-family: "Roboto";
  list-style: none;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
}

html,
body,
input,
textarea {
  background: $dark;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Odibee Sans", cursive;
}

img {
  display: block;
  max-width: 100%;
}

a {
  text-decoration: none;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}

.v-enter,
.v-leave-to {
  transition: all 0.3s;
}

@media only screen and (max-width: 450px) {
  .container {
    max-width: 1250px;
    padding-left: 15px;
    padding-right: 15px;
    margin: 0 !important;
  }
}
</style>