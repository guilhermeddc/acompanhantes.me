<template>
  <BaseLayout>
    <Feature />
    <Body />
  </BaseLayout>
</template>

<script>
import BaseLayout from "../layouts/BaseLayout";
import Feature from "../containers/Feature";
import Body from "../containers/Body";

export default {
  name: "Home",
  components: {
    BaseLayout,
    Feature,
    Body
  }
};
</script>
