<template>
  <footer>
    <div class="header-footer">
      <h1>Trabalhe conosco:</h1>
      <router-link :to="{name: 'Advertise'}">Anuncie</router-link>
    </div>
    <div class="copyright">
      <p>
        © 2020 - Copyright:
        <a href="https://acompanhantes.me">acompanhantes.me</a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
footer {
  border-top: 2px solid $tertiary;
  width: 100%;
  box-shadow: $shadow;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #262626;
  & .header-footer {
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    & h1 {
      color: $light;
      font-weight: 400;
      padding: 10px;
      font-size: 28px;
    }
    & a {
      color: $light;
      background: $tertiary;
      font-size: 18px;
      font-weight: 300;
      padding: 20px 40px;
      margin-left: 10px;
      border-radius: 6px;
      box-shadow: $shadow;
      &:hover {
        opacity: 0.8;
        transition: opacity 0.3s;
      }
    }
  }
  & .copyright {
    padding: 10px 0;
    width: 100%;
    background: $dark;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: $shadow;
    & p {
      color: $light;
      & a {
        color: $tertiary;
      }
    }
  }
}
@media only screen and (max-width: 450px) {
  footer {
    & .header-footer {
      display: flex;
      & h1 {
        padding: 10px;
        font-size: 20px;
      }
      & a {
        color: $light;
        background: $tertiary;
        font-size: 18px;
        font-weight: 300;
        padding: 10px 30px;
        margin-left: 0px;
        border-radius: 6px;
        &:hover {
          opacity: 0.8;
          transition: opacity 0.3s;
        }
      }
    }
    & .copyright {
      padding: 10px 0;
      width: 100%;
      background: $dark;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: $shadow;
      & p {
        color: $light;
        & a {
          color: $tertiary;
        }
      }
    }
  }
}
</style>