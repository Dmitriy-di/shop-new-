<template>
  <div class="v-catalog">
    <div class="v-catalog__header">
      <h1>Catalog</h1>
      <router-link :to="{ name: 'cart' }">
        <i class="medium material-icons">shopping_basket </i>
        <div class="v-catolog__link_to_cart">
          <p class="v-catalog__quantity">
            {{ CART.reduce((sum, item) => sum + item.quantity, 0) }}
          </p>
        </div>
      </router-link>
    </div>
    <div class="v-catalog__wrap">
      <vCatalogItem
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @addToCart2="addToCart"
      />
      <!-- <Suspense>
        <template #default>
          <vCatalogItem
            v-for="product in PRODUCTS"
            :key="product.article"
            :product_data="product"
            @addToCart2="addToCart"
          />
        </template>
      </Suspense> -->
    </div>
  </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item.vue";

// import { defineAsyncComponent } from "vue";
// const vCatalogItem = defineAsyncComponent(() => import("./v-catalog-item.vue"));

// Импортируем данные из хранилища
import { mapActions, mapGetters } from "vuex";
export default {
  name: "v-catalog",
  components: {
    vCatalogItem,
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),

    addToCart(data) {
      data.quantity += 1;
      this.ADD_TO_CART(data);
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
    // this.GET_PRODUCTS_FROM_API().then((response) => {
    //   if (response.data) {
    //     console.log("Данные пришли");
    //   }
    // });
  },
};
</script>

<style lang="scss">
.v-catalog {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__link_to_cart {
    padding: 10px;
  }
  &__wrap {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }
  &__quantity {
    color: rgb(255, 248, 248);

    font-size: 20px;
  }
}
</style>
