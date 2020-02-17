<template>
  <section class="container">
    <nav>
      <template v-for="(item, index) in featured">
        <Models :key="index" :name="`${item.first_name} ${item.last_name}`" :image="item.image" />
      </template>
      <template v-for="(item, index) in all.slice(0, 6)">
        <Models
          :height="200"
          :key="index"
          :name="`${item.first_name} ${item.last_name}`"
          :image="item.image"
        />
      </template>
    </nav>
    <article>
      <Models :height="500" :name="superFeatured[0].first_name" :image="superFeatured[0].image" />
      <div class="content">
        <template v-for="(item, index) in all">
          <Card
            :height="300"
            :key="index"
            :name="`${item.first_name} ${item.last_name}`"
            :image="item.image"
          />
        </template>
      </div>
    </article>
  </section>
</template>

<script>
import Models from "../components/Models";
import Card from "../components/Card";

export default {
  name: "Body",
  components: {
    Models,
    Card
  },
  computed: {
    all() {
      return this.$store.getters.all;
    },
    featured() {
      return this.$store.getters.featured;
    },
    superFeatured() {
      return this.$store.getters.superFeatured;
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  padding: 35px;
  display: flex;
  justify-content: space-between;
  & nav {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  & article {
    padding: 0 20px;
    flex: 3;
    display: flex;
    flex-direction: column;
    width: 100%;
    & .content {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>