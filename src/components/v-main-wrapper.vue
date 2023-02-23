<template>
  <div class="v-main-wrapper">
    <h1>{{ title }}</h1>
    <v-catalog />
    <vCart v-if="CART.length" :cart_data="CART" />
  </div>
</template>

<script>
import vCatalog from "./v-catalog.vue";
import vCart from "./v-cart.vue";
import { mapGetters } from "vuex";
export default {
  name: "v-main-wrapper",
  components: {
    vCart,
    vCatalog,
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
}
h1 {
  color: rgb(255, 230, 0);
}
</style>
