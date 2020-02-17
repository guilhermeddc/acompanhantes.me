<template>
  <Header>
    <div class="container nav-bar">
      <img :src="logo.logoLight" alt="Acompanhantes.me" class="logo" />
      <nav>
        <ul class="menu">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/">Modelos</router-link>
          </li>
          <li>
            <router-link to="/">Cidade</router-link>
          </li>
          <li>
            <router-link to="/">Contato</router-link>
          </li>
          <li>
            <router-link to="/">Anucie</router-link>
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
  }
};
</script>

<style lang="scss" scoped>
header {
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
    height: 35px;
    padding: 15px;
  }
  & .menu {
    display: flex;
    align-items: center;
    justify-content: space-around;
    & li {
      padding: 23px 0;
      &:nth-child(1) {
        background: $tertiary;
      }
      &:nth-child(3) {
        background: $tertiary;
      }
      &:nth-child(5) {
        background: $tertiary;
      }
    }
    & li a {
      color: $light;
      font-weight: 300;
      padding: 23px 40px;
    }
  }
}
</style>