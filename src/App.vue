<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    this.$store.dispatch("getModels");
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
</style>