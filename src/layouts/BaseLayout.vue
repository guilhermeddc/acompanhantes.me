<template>
  <main>
    <NavBar />
    <div>
      <Feature />
      <Body>
        <slot />
      </Body>
    </div>
    <Footer />
  </main>
</template>

<script>
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Feature from "./components/Feature";
import Body from "./components/Body";

export default {
  name: "BaseLayout",
  components: {
    NavBar,
    Footer,
    Feature,
    Body
  }
};
</script>

<style lang="scss" scoped>
div {
  padding-top: 90px;
}
</style>