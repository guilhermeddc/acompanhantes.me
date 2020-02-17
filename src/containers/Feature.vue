<template>
  <section>
    <div class="container feature">
      <template v-for="(item, index) in all.slice(0, 8)">
        <Featured :key="index" :name="`${item.first_name} ${item.last_name}`" :image="item.image" />
      </template>
    </div>
  </section>
</template>

<script>
import Featured from "../components/Featured";

export default {
  name: "Feature",
  components: {
    Featured
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
  border-bottom: 2px solid $tertiary;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.5), 0 2px 10px 0 rgba(0, 0, 0, 0.5);
  & .feature {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    padding: 35px 0;
  }
}
</style>
