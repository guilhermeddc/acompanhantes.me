<template>
  <Header>
    <div class="container nav-bar">
      <router-link :to="{name: 'Home'}">
        <img :src="logo.logoLight" alt="Acompanhantes.me" class="logo" />
      </router-link>
      <nav>
        <ul class="menu">
          <li>
            <router-link :to="`/${params}`">Modelos</router-link>
          </li>
          <li>
            <router-link :to="{name: 'Terms'}">Termos</router-link>
          </li>
          <li>
            <router-link :to="{name: 'Contact'}">Contato</router-link>
          </li>
          <li>
            <router-link :to="{name: 'Advertise'}">Anuncie</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </Header>
</template>

<script>
import LogoDark from "../../assets/logos/logo_dark.svg";
import logoLight from "../../assets/logos/logo_light.svg";

export default {
  name: "NavBar",
  data() {
    return {
      logo: {
        LogoDark,
        logoLight
      }
    };
  },
  computed: {
    params() {
      return this.$store.getters.params;
    }
  }
};
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  background: $tertiary;
}
header {
  z-index: 30;
  background: #262626;
  position: fixed;
  width: 100%;
  border-bottom: 2px solid $tertiary;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.5), 0 2px 10px 0 rgba(0, 0, 0, 0.5);
  & .nav-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  & .logo {
    padding: 15px;
    width: 400px;
  }
  & .menu {
    display: flex;
    align-items: center;
    justify-content: space-around;
    & li a {
      color: $light;
      font-weight: 300;
      padding: 23px 40px;
    }
  }
}
</style>