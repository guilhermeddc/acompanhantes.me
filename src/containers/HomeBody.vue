<template>
  <div class="content">
    <Title title="Garota em Destaque" />
    <Models :height="500" :name="superFeatured[0].first_name" :image="superFeatured[0].image" />
    <Title title="Acompanhantes - Reais, lindas e simpáticas" />
    <template v-for="(item, index) in all">
      <Card
        :height="300"
        :key="index"
        :name="`${item.first_name} ${item.last_name}`"
        :image="item.image"
      />
    </template>
  </div>
</template>

<script>
import Models from "../components/Models";
import Card from "../components/Card";
import Title from "../components/Title";

export default {
  name: "HomeBody",
  components: {
    Models,
    Card,
    Title
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
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>