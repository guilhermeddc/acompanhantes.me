<template>
  <section class="container">
    <nav>
      <Title title="Acompanhantes em Destaque" />
      <template v-for="(item, index) in featured">
        <Models :key="index" :name="`${item.first_name} ${item.last_name}`" :image="item.image" />
      </template>
      <template v-for="(item, index) in all">
        <Models
          :height="200"
          :key="index"
          :name="`${item.first_name} ${item.last_name}`"
          :image="item.image"
        />
      </template>
    </nav>
    <article>
      <slot />
    </article>
  </section>
</template>

<script>
import Models from "../../components/Models";
import Title from "../../components/Title";

export default {
  name: "Body",
  components: {
    Models,
    Title
  },
  computed: {
    all() {
      return this.$store.getters.all;
    },
    featured() {
      return this.$store.getters.featured;
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  & nav {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  & article {
    padding: 0 0 0 30px;
    flex: 3;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
}
</style>