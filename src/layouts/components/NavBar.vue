<template>
  <Header>
    <div class="container nav-bar">
      <router-link :to="{name: 'Home'}">
        <img :src="logo.logoLight" alt="Acompanhantes.me" class="logo" />
        <img :src="logo.logoLightShort" alt="Acompanhantes.me" class="logo-short" />
      </router-link>
      <nav :class="active ? 'active' : 'nav-links'">
        <ul>
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
      <img :src="menu" class="menu" @click="active = !active" />
    </div>
  </Header>
</template>

<script>
import logoLightShort from "../../assets/logos/logo_light_short.svg";
import menu from "../../assets/icons/menu.png";
import logoLight from "../../assets/logos/logo_light.svg";

export default {
  name: "NavBar",
  data() {
    return {
      logo: {
        logoLight,
        logoLightShort
      },
      menu,
      active: false
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
  box-shadow: $shadow;
  & .nav-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  & .menu {
    display: none;
  }
  & .logo {
    padding: 15px;
    width: 400px;
  }
  & .logo-short {
    display: none;
    padding: 12px;
    width: 100px;
  }
  & .nav-links ul {
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
@media only screen and (max-width: 450px) {
  header {
    & .nav-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    & .logo {
      display: none;
    }
    & .logo-short {
      display: flex;
    }
    & .nav-links {
      display: none;
    }
    & .active {
      box-shadow: $shadow;
      position: absolute;
      top: 65px;
      right: 0;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      padding: 0;
      width: 100%;
      margin: 0;
      background: #262626;
      & ul {
        display: flex;
        flex-direction: column;
        width: 100%;
        & li {
          background: #262626;
          text-align: right;
          padding: 10px;
          & a {
            text-align: right;
            color: $light;
            padding: 10px;
            font-weight: 300;
          }
        }
      }
    }
    & .menu {
      display: flex;
    }
  }
}
.router-link-exact-active {
  background: $tertiary;
  border-radius: 6px;
  box-shadow: $shadow;
}
</style>