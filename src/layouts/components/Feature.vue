<template>
  <section class="container">
    <Title title="Acompanhantes e Garotas de Programa em" city="Santa Maria" />
    <div class="feature">
      <template v-for="(item, index) in all.slice(0, 7)">
        <Featured
          :key="index"
          :name="`${item.first_name} ${item.last_name}`"
          :image="item.image"
          :description="item.shortDescription"
        />
      </template>
    </div>
  </section>
</template>

<script>
import Featured from "../../components/Featured";
import Title from "../../components/Title";

export default {
  name: "Feature",
  components: {
    Featured,
    Title
  },
  data() {
    return {
      models: []
    };
  },
  computed: {
    all() {
      return this.$store.getters.all;
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  & .feature {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 0px;
  }
}
</style>
