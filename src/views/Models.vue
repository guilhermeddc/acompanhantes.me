<template>
  <BaseLayout>
    <div class="slider">
      <vue-flux
        :options="vfOptions"
        :images="vfImages"
        :transitions="vfTransitions"
        :captions="vfCaptions"
        ref="slider"
      >
        <template v-slot:preloader>
          <flux-preloader />
        </template>

        <template v-slot:caption>
          <flux-caption />
        </template>

        <template v-slot:controls>
          <flux-controls />
        </template>

        <template v-slot:pagination>
          <flux-pagination />
        </template>

        <template v-slot:index>
          <flux-index />
        </template>
      </vue-flux>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from "../layouts/BaseLayout";
import { instance as api } from "../plugins/api";
import {
  VueFlux,
  FluxCaption,
  FluxControls,
  FluxIndex,
  FluxPagination,
  FluxPreloader
} from "vue-flux";

export default {
  name: "Home",
  components: {
    BaseLayout,
    VueFlux,
    FluxCaption,
    FluxControls,
    FluxIndex,
    FluxPagination,
    FluxPreloader
  },
  data: () => ({
    vfOptions: {
      autoplay: true
    },
    vfImages: [],
    vfTransitions: ["fade"],
    vfCaptions: []
  }),
  created() {
    this.getImages();
  },
  methods: {
    async getImages() {
      try {
        const { id } = this.$route.params;
        const { data: res } = await api.get(`/photos/?client=${id}`);
        this.vfImages = res.results.map(img => img.photo);
        this.vfCaptions = res.results.map(desc => desc.title);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.vue-flux .flux-caption {
  font-family: "Odibee Sans", cursive;
  font-size: 18px !important;
  border-top: 2px solid #f9057c;
  border-radius: 6px;
}
.slider {
  margin-top: 20px;
  width: 100%;
}
</style>
