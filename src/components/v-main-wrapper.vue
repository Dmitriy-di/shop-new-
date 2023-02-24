<template>
  <div class="v-main-wrapper">
    <h1>{{ title }}</h1>
    <!-- Чтобы все корректно отображалось и ничего не ломалось рекомендуется тег router-view помещать в тег keep-alive-->
    <keep-alive><router-view></router-view></keep-alive>
    <!-- <v-catalog />
    <vCart v-if="CART.length" :cart_data="CART" /> -->
  </div>
</template>

<script>
// import vCatalog from "./v-catalog.vue";
// import vCart from "./v-cart.vue";
import { mapGetters } from "vuex";
export default {
  name: "v-main-wrapper",
  components: {
    // vCart,
    // vCatalog,
  },
  props: {},
  data() {
    return {
      title: "MY SHOP",
    };
  },
  computed: {
    ...mapGetters(["CART"]),
  },
  methods: {},
  watch: {},
  mounted() {
    console.log("mounted is here");
  },
};
</script>

<style lang="scss">
.v-main-wrapper {
  max-width: 1000px;
  padding: 20px;
}
h1 {
  color: rgb(255, 230, 0);
}
</style>
