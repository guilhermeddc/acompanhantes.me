<template>
  <main>
    <NavBar />
    <br />
    <br />
    <br />
    <br />
    <Feature />
    <br />
    <main class="container">
      <slot />
    </main>
    <br />
    <Footer />
  </main>
</template>

<script>
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Feature from "./components/Feature";

export default {
  name: "BaseLayout",
  components: {
    NavBar,
    Feature,
    Footer
  }
};
</script>

<style lang="scss" scoped>
</style>