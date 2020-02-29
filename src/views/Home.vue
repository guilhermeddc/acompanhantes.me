<template>
  <section class="home">
    <div class="top">
      <img :src="Logo" :alt="$store.getters.alt" />
      <h1>Acompanhantes, Garotas de Programa - Reais, lindas e simpáticas</h1>
      <nav>
        <router-link to="/contato">Entre em contato</router-link>
        <p>/</p>
        <router-link to="/anuncie">Anuncie</router-link>
        <p>/</p>
        <router-link to="/termos-de-servicos">Termos de Serviço</router-link>
      </nav>
      <p>O Acompanhates.ME não é uma agência de Acompanhantes, e não se comporta como tal, destina-se apenas a divulgação de ensaios fotográficos sensuais de Garotas de alto nível em sua região, atualmente o termo Garotas de Programa é pouco usado referindo-se as anunciantes. Não intermediamos nenhum contato das acompanhantes de sua região. Não temos nenhuma interferência e/ou envolvimento e/ou responsabilidade nas atividades externas das anunciantes. Se você for menor de 18 anos, aconselhamos não acessar. No caso de adultos, leia a página de Termos de Uso.</p>
      <h4>© 2020 - Copyright: acompanhantes.me</h4>
    </div>
    <div class="botton container">
      <div class="body-home">
        <div>
          <h1>
            Olá, seja bem-vindo ao
            melhor classificado de acompanhantes de luxo da região.
            A maior seleção de modelos com fotos exclusivas.
          </h1>
          <br />
          <p>
            Este site é proibido acesso para
            <strong>menores de 18 anos</strong> de idade!
          </p>
        </div>
        <div class="body-botton">
          <h2>Escolha sua cidade:</h2>
          <select id="city" class="input-cities" v-model="city">
            <option
              class="itens"
              v-for="item in cities"
              :key="item.id"
              :value="item.slug"
            >{{ `${item.name}/${item.state.uf}` }}</option>
          </select>
          <router-link class="btn-enter" :to="`/${city}`">Entre e Fique a Vontade!</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from "../assets/logos/logo_dark.svg";
import bg from "../assets/images/2.png";

export default {
  name: "Home",
  data: () => ({
    Logo,
    bg,
    city: ""
  }),
  computed: {
    cities() {
      return this.$store.getters.cities;
    }
  },
  watch: {
    city(newVal) {
      if (newVal) {
        this.$store.dispatch("getParams", newVal);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: $light;
  & .top {
    height: 50vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & h1 {
      padding: 10px 20px;
      font-size: 28px;
      border-bottom: 3px solid $tertiary;
      border-radius: 25px;
    }
    & nav {
      display: flex;
      padding: 20px;
      justify-content: space-evenly;
      & a {
        &:hover {
          color: $tertiary;
          transition: all 0.3s;
        }
      }
      & p {
        font-size: 16px;
        font-weight: bold;
        padding-left: 10px;
        padding-right: 10px;
      }
    }
    & p {
      max-width: 600px;
      text-align: justify;
      font-weight: 300;
      font-size: 12px;
    }
    & h4 {
      padding: 40px 10px 10px;
      font-weight: 400;
      font-size: 18px;
    }
  }
  & .botton {
    box-shadow: $shadow;
    border-top: 3px solid $tertiary;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: $dark;
    & .body-home {
      padding: 40px;
      width: 100%;
      max-width: 600px;
      height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      & h1 {
        font-weight: 300;
        color: $light;
        font-size: 28px;
      }
      & p {
        font-weight: 300;
        color: $light;
        & strong {
          color: $tertiary;
        }
      }
      & .body-botton {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 180px;
        & h2 {
          font-weight: 300;
          color: $light;
          padding-bottom: 10px;
        }
        & .input-cities {
          padding: 10px;
          width: 100%;
          border: none;
          background: $light;
          border-top: 3px solid $tertiary;
          border-radius: 6px;
          text-transform: uppercase;
          font-size: 16px;
        }
        & .itens {
          border-radius: 6px;
        }
        & .btn-enter {
          margin-top: 10px;
          border-top: 3px solid $light;
          color: $light;
          font-family: "Odibee Sans", cursive;
          background: $tertiary;
          font-size: 32px;
          font-weight: 400;
          text-align: center;
          padding: 10px 40px;
          border-radius: 6px;
          &:hover {
            opacity: 0.8;
            transition: opacity 0.3s;
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 450px) {
  .home {
    height: 150%;
    width: 100%;
    & .top {
      align-items: center;
      height: 300px;
      & img {
        margin-top: 10px;
        width: 90%;
        padding: 10px;
      }
      & h1 {
        padding: 5px 10px;
        font-size: 24px;
        text-align: center;
        margin-bottom: 20px;
        margin-top: 10px;
      }
      & nav {
        display: flex;
        padding: 5px;
        justify-content: space-evenly;
        & a {
          display: none;
        }
        & p {
          display: none;
        }
      }
      & p {
        display: none;
      }
      & h4 {
        text-align: center;
        padding: 0px;
      }
    }
    & .botton {
      padding: 0;
      width: 100%;
      height: 400px;
      & .body-home {
        padding: 10px;
        & h1 {
          font-size: 21px;
          padding: 20px;
        }
        & p {
          padding: 0 20px;
        }
        & .body-botton {
          padding: 20px;
          & .btn-enter {
            font-size: 26px;
          }
        }
      }
    }
  }
}
</style>