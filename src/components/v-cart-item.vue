<template>
  <div class="v-cart-item">
    <p>{{ title }}</p>
    <v-catalog />
    <v-cart />
  </div>
</template>

<script>
import vCart from "./v-cart.vue";
import vCatalog from "./v-catalog.vue";
export default {
  name: "v-cart-item",
  components: {
    vCart,
    vCatalog,
  },
  props: {},
  data() {
    return {
      title: "hello folks",
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
.v-cart-item {
}
</style>
