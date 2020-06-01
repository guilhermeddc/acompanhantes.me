<template>
  <BaseLayout>
    <section class="container">
      <div class="model-title">
        <div>
          <h2>{{model.slug}} - {{model.age}} anos</h2>
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
    <div class="profile" :style="{ backgroundImage: `url('${model.image}')` }" />
    <div class="model-profile">
      <div class="model-services">
        <h2>Serviços</h2>
        <div>
          <span v-for="(item, index) in model.services_offered" :key="index">
            {{ item.services }}
            <strong
              v-if="index != Object.keys(model.services_offered).length - 1"
            >/</strong>
          </span>
        </div>
        <br />
        <h2>Descrição</h2>
        <p>{{model.description}}</p>
      </div>
      <div>
        <VueGallery :images="fluxImages" :index="index" @close="index = null" />
        <div class="gallery">
          <div
            class="image"
            v-for="(image, imageIndex) in fluxImages"
            :key="imageIndex"
            @click="index = imageIndex"
            :style="{ backgroundImage: `url('${image}')` }"
          />
        </div>
      </div>
      <div class="model-detail">
        <h2>Perfil da modelo</h2>
        <span>
          <p>Nome:</p>
          <p>{{model.slug}}</p>
        </span>
        <span>
          <p>Cidade:</p>
          <p>{{local}}</p>
        </span>
        <span>
          <p>Idade:</p>
          <p>{{model.age}}</p>
        </span>
        <span>
          <p>Genero:</p>
          <p>{{model.genre.genre}}</p>
        </span>
        <span>
          <p>Etinia:</p>
          <p>{{model.ethnicity.ethnicity}}</p>
        </span>
        <span>
          <p>Locais:</p>
          <p>
            <span v-for="(item, index) in model.places_accepted" :key="index">
              {{item.place}}
              <strong v-if="index != Object.keys(model.places_accepted).length - 1">/</strong>
            </span>
          </p>
        </span>
        <span>
          <p>Pagamentos:</p>
          <p>
            <span v-for="(item, index) in model.payments_accepted" :key="index">
              {{item.payment}}
              <strong
                v-if="index != Object.keys(model.payments_accepted).length - 1"
              >/</strong>
            </span>
          </p>
        </span>
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
    },
    local() {
      return `${this.model.acting_cities[0].name} - ${this.model.acting_cities[0].state.uf}`;
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
  justify-content: space-between;
  align-items: center;
  margin: 10px 20px 0px -15px;
  padding: 15px 0 15px 15px;
  color: $light !important;
  box-shadow: $shadow;
  width: 100%;
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
.profile {
  width: 99%;
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin: 10px auto;
  box-shadow: $shadow;
  border-top: 2px solid $tertiary;
  border-radius: 6px;
}
.model-services {
  margin: 5px;
  padding: 10px;
  box-shadow: $shadow;
  border-top: 2px solid $tertiary;
  border-radius: 6px;
  color: $light;
  & > h2 {
    margin: 10px 15px;
    padding-bottom: 10px;
    border-bottom: 0.1px solid $tertiary;
    font-weight: normal;
  }
  & > div,
  p {
    margin: 10px 15px;
    text-align: justify;
    font-weight: 300;
    & span {
      & strong {
        color: $tertiary;
        padding: 0 5px;
      }
    }
  }
}
.model-detail {
  margin: 20px 5px;
  padding: 10px;
  box-shadow: $shadow;
  border-top: 2px solid $tertiary;
  border-radius: 6px;
  color: $light;
  text-align: justify;
  & > h2 {
    margin: 10px 15px;
    padding-bottom: 10px;
    border-bottom: 0.1px solid $tertiary;
    font-weight: normal;
  }
  & > span {
    display: flex;
    justify-content: space-between;
    margin: 10px 15px;
    padding-bottom: 7px;
    border-bottom: 0.1px solid $tertiary;
    font-weight: 300;
    & strong {
      color: $tertiary;
      padding: 0 5px;
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
    width: 48%;
    height: 300px;
    box-shadow: $shadow;
    border-top: 2px solid $tertiary;
    border-radius: 6px;
    margin: 10px 5px;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
      transition: all 0.5s;
    }
  }
}
</style>
