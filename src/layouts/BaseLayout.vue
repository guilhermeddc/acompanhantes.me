<template>
  <main>
    <NavBar />
    <div class="content">
      <slot />
    </div>
    <Footer />
  </main>
</template>

<script>
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default {
  name: "BaseLayout",
  components: {
    NavBar,
    Footer
  }
};
</script>

<style lang="scss" scoped>
.content {
  padding-top: 67px;
}
</style>