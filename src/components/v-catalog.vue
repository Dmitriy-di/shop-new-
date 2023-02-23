<template>
  <div class="v-catalog">
    <h1>Catalog</h1>
    <div class="v-catalog__wrap">
      <vCatalogItem
        v-for="product in products"
        :key="product.article"
        :product_data="product"
        @sendDataPerant="showArticleFormChild"
      />
    </div>
  </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item.vue";
export default {
  name: "v-catalog",
  components: {
    vCatalogItem,
  },
  props: {},
  data() {
    return {};
  },
  methods: {
    showArticleFormChild(data) {
      console.log(data);
    },
  },
};
</script>

<style lang="scss">
.v-catalog__wrap {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}
</style>
