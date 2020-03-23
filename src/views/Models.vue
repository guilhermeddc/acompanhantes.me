<template>
  <BaseLayout>
    <section class="container">
      <div class="model-title">
        <div>
          <h2>{{model.slug}}</h2>
          <p>{{model.phone}}</p>
        </div>
        <a
          :href="`https://api.whatsapp.com/send?phone=55${model.phone}&text=Ol%C3%A1,%20vi%20vc%20no%20Acompanhantes.me%20e%20gostaria%20de%20saber%20um%20pouco%20mais.`"
          target="_blank"
        >
          <img :src="WhatsApp" alt="WhatsApp" />
        </a>
      </div>
    </section>
    <div>
      <VueGallery :images="fluxImages" :index="index" @close="index = null" />
      <div class="gallery">
        <div
          class="image"
          v-for="(image, imageIndex) in fluxImages"
          :key="imageIndex"
          @click="index = imageIndex"
          :style="{ backgroundImage: `url('${image}')`, width: '48%', height: '300px' }"
        />
      </div>
    </div>
    <br />
    {{model}}
    <br />
    <br />
    {{fluxImages}}
  </BaseLayout>
</template>

<script>
import BaseLayout from "../layouts/BaseLayout";
import { instance as api } from "../plugins/api";
import WhatsApp from "../assets/icons/whatsapplogo.png";
import VueGallery from "vue-gallery";

export default {
  name: "Models",
  components: {
    BaseLayout,
    VueGallery
  },
  data: () => ({
    WhatsApp,
    images: [],
    model: {},
    fluxImages: [],
    index: null
  }),
  created() {
    this.getImages();
    this.getData();
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  watch: {
    id(newVal) {
      if (newVal) {
        this.getImages();
        this.getData();
      }
    }
  },
  methods: {
    async getImages() {
      try {
        const { data: res } = await api.get(`/photos/?client=${this.id}`);
        this.images = res.results;
        this.fluxImages = res.results.map(r => r.photo);
      } catch (error) {
        console.error(error);
      }
    },
    async getData() {
      try {
        const { data: res } = await api.get(`/models/${this.id}/`);
        this.model = res;
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.model-title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 20px 10px -15px;
  padding: 15px 0 15px 15px;
  color: $light !important;
  box-shadow: $shadow;
  width: 99.2%;
  border-top: 2px solid $tertiary;
  border-radius: 6px;
  background: linear-gradient(315deg, #333333, #2b2b2b);
  & div {
    & h2 {
      font-weight: normal;
    }
    & p {
      font-weight: 300;
      font-size: 14px;
      color: $tertiary;
    }
  }
}
.gallery {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  & .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    box-shadow: $shadow;
    border-top: 2px solid $tertiary;
    border-radius: 6px;
    margin: 10px 5px;
    cursor: pointer;
  }
}
</style>
