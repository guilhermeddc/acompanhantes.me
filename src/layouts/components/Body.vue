<template>
  <section class="container">
    <nav>
      <Title title="Acompanhantes em Destaque" />
      <template v-for="(item, index) in featured">
        <Models
          :key="index"
          :name="`${item.first_name} ${item.last_name}`"
          :image="item.image"
          :height="35"
        />
      </template>
      <template v-for="(item, index) in all">
        <Models
          :height="17"
          :key="index"
          :name="`${item.first_name} ${item.last_name}`"
          :image="item.image"
        />
      </template>
    </nav>
    <div>
      <Models
        :height="50"
        :name="superFeatured[0].first_name"
        :image="superFeatured[0].image"
        :id="superFeatured[0].id"
      />
    </div>
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
    },
    superFeatured() {
      return this.$store.getters.superFeatured;
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
  & > div {
    display: none;
  }
  & article {
    padding: 0 0 0 30px;
    flex: 4;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
}
@media only screen and (max-width: 450px) {
  section {
    padding: 10px auto;
    flex-direction: column;
    & > nav {
      display: none;
    }
    & > div {
      display: flex;
      width: 100%;
    }
    & article {
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;
      display: flex;
      width: 100%;
    }
  }
}
</style>