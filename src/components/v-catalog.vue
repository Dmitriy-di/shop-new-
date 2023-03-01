<template>
  <div class="v-catalog">
    <vForm @closeModal="toggleModal" :isVisible="isVisible" />
    <div class="v-catalog__header">
      <h1 class="v-catalog__heading">Catalog</h1>
      <router-link :to="{ name: 'cart' }">
        <i class="v-catalog__icons medium material-icons">shopping_basket </i>
        <div class="v-catolog__link_to_cart">
          <p class="v-catalog__quantity">
            {{ CART.reduce((sum, item) => sum + item.quantity, 0) }}
          </p>
        </div>
      </router-link>
      <button @click="toggleModal" waves-effect btn>add a product</button>
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
import vForm from "./v-form.vue";

// import { defineAsyncComponent } from "vue";
// const vCatalogItem = defineAsyncComponent(() => import("./v-catalog-item.vue"));

// Импортируем данные из хранилища
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "v-catalog",
  components: {
    vCatalogItem,
    vForm,
  },
  props: {},
  data() {
    return {
      isVisible: false,
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART", "TOTALSUM"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    ...mapMutations(["SET_TOTALSUM"]),
    addToCart(data) {
      data.quantity += 1;
      this.ADD_TO_CART(data);
      this.SET_TOTALSUM(this.TOTALSUM + data.price);
    },
    toggleModal() {
      this.isVisible = !this.isVisible;
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
  button {
    margin: 10px 0;
    padding: 15px 30px;
    border-radius: 10px;
    background-color: #d2ff08;
    &:hover {
      color: #d2ff08;
      background-color: rgb(75, 74, 74);
    }
  }
  &__quantity {
    color: rgb(255, 248, 248);
    font-size: 20px;
  }
  &__heading {
  }
}
</style>
