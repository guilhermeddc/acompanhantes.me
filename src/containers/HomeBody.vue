<template>
  <div class="content">
    <Title title="Garota em Destaque" />
    <Models
      :height="50"
      :name="superFeatured[0].first_name"
      :image="superFeatured[0].image"
      :id="superFeatured[0].id"
    />
    <Title title="Acompanhantes - Reais, lindas e simpáticas" />
    <template v-for="(item, index) in all">
      <Card
        :height="30"
        :key="index"
        :name="`${item.first_name} ${item.last_name}`"
        :image="item.image"
        :id="item.id"
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