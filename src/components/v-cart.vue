<template>
  <div class="v-cart">
    <div class="v-catolog__link_to_cart">cart:{{ CART.length }}</div>
    <router-link :to="{ name: 'catalog' }">
      <button>Back to Catalog</button>
    </router-link>
    <h1>Cart</h1>
    <div class="v-cart__wrap">
      <!-- <vCartItem
        v-for="(item, index) in cart_data"
        :key="item.article"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
      /> -->
      <vCartItem
        v-for="(item, index) in CART"
        :key="item.article"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
      />
    </div>
    <p v-if="!CART.length">You haven't got any products</p>
  </div>
</template>

<script>
import vCartItem from "./v-cart-item.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "v-cart",
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["CART"]),
  },
  components: {
    vCartItem,
  },
  methods: {
    ...mapActions(["DELETE_FROM_CART"]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
      console.log(index);
    },
  },
};
</script>

<style lang="scss">
.v-cart {
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  &__wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
