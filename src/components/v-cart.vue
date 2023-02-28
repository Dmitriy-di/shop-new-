<template>
  <div class="v-cart">
    <router-link :to="{ name: 'catalog' }">
      <div class="v-catolog__link_to_cart">
        <i class="medium material-icons">shopping_basket </i>
        <p class="v-cart__quantity">
          {{ CART.reduce((sum, item) => sum + item.quantity, 0) }}
        </p>
      </div>
      <button class="btn">Back to Catalog</button>
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
    <div class="v-cart__total-sum">Total sum = {{ TOTALSUM }}</div>
    <p v-if="!CART.length">You haven't got any products</p>
  </div>
</template>

<script>
import vCartItem from "./v-cart-item.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";

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
    ...mapGetters(["CART", "TOTALSUM"]),
  },
  components: {
    vCartItem,
  },
  methods: {
    ...mapActions(["DELETE_FROM_CART"]),
    ...mapMutations(["SET_TOTALSUM"]),
    deleteFromCart(index) {
      this.SET_TOTALSUM(this.TOTALSUM - this.CART[index].price);
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
  &__quantity {
    color: rgb(255, 248, 248);
    font-size: 20px;
  }
  &__wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  button {
    margin: 10px 0;
    padding: 15px 30px;
    border-radius: 10px;
    background-color: #d2ff08;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    &:hover {
      color: #d2ff08;
      background-color: rgb(75, 74, 74);
    }
  }
  &__total-sum {
    font-size: 30px;
    color: #d2ff08;
  }
}
</style>
