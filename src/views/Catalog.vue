<template>
  <BaseLayout>
    <HomeBody />
  </BaseLayout>
</template>

<script>
import BaseLayout from "../layouts/BaseLayout";
import HomeBody from "../containers/HomeBody";

export default {
  name: "Catalog",
  components: {
    BaseLayout,
    HomeBody
  }
};
</script>
