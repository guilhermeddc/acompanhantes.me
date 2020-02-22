<template>
  <a
    mp-mode="dftl"
    href="https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=118426446-4eb8947f-289a-4de0-8ced-b278fbe2ec77"
    name="MP-payButton"
    class="blue-tr-l-ov-brall"
  >Pagar</a>
</template>

<script>
(function() {
  function $MPC_load() {
    window.$MPC_loaded !== true &&
      (function() {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src =
          document.location.protocol +
          "//secure.mlstatic.com/mptools/render.js";
        var x = document.getElementsByTagName("script")[0];
        x.parentNode.insertBefore(s, x);
        window.$MPC_loaded = true;
      })();
  }
  window.$MPC_loaded !== true
    ? window.attachEvent
      ? window.attachEvent("onload", $MPC_load)
      : window.addEventListener("load", $MPC_load, false)
    : null;
})();
export default {
  name: "PaymentYear"
};
</script>

<style>
</style>