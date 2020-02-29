<template>
  <section class="container">
    <Title
      title="Acompanhantes e Garotas de Programa em"
      :city="`${city[0].name}/${city[0].state.uf}`"
    />
    <div class="feature">
      <template v-for="(item, index) in all.slice(0, 9)">
        <Featured
          :key="index"
          :name="`${item.first_name} ${item.last_name}`"
          :image="item.image"
          :description="item.shortDescription"
          :id="item.id"
        />
      </template>
    </div>
    <div class="feature-moblie">
      <template v-for="(item, index) in all.slice(0, 9)">
        <Featured
          :key="index"
          v-show="counter === index"
          :name="`${item.first_name} ${item.last_name}`"
          :image="item.image"
          :description="item.shortDescription"
          :id="item.id"
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
      models: [],
      counter: 1
    };
  },
  created() {
    setInterval(() => {
      this.counter += 1;
    }, 6000);
  },
  watch: {
    counter(newVal) {
      if (newVal === this.all.length) {
        this.counter = 0;
      }
      if (newVal === -1) {
        this.counter = this.all.length;
      }
    }
  },
  computed: {
    all() {
      return this.$store.getters.all;
    },
    city() {
      return this.$store.getters.cities.filter(
        city => city.slug === this.$route.params.city
      );
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
  & .feature-moblie {
    display: none;
  }
}
@media only screen and (max-width: 450px) {
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    & .feature {
      display: none;
    }
    & .feature-moblie {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding-bottom: 0px;
    }
  }
}
</style>
