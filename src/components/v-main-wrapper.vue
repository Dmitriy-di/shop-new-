<template>
  <div class="v-main-wrapper">
    <h1>{{ title }}</h1>
    <v-catalog />
    <v-cart />
  </div>
</template>

<script>
import vCart from "./v-cart.vue";
import vCatalog from "./v-catalog.vue";
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
  computed: {},
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
