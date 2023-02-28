<template>
  <div class="v-cart-item">
    <img
      class="v-cart-item__image"
      :src="require('../assets/images/' + cart_item_data.image)"
      alt="not found"
    />
    <div>
      <p class="v-catalog-item__name">{{ cart_item_data.name }}</p>
      <p class="v-catalog-item__price">{{ cart_item_data.price }}</p>
      <p class="v-catalog-item__name">{{ cart_item_data.about }}</p>
      <p class="v-catalog-item__name">{{ cart_item_data.category }}</p>
    </div>
    <div class="v-cart-item__quantity">
      <div>
        <span>Quantity </span>
        <span>
          {{ cart_item_data.quantity }}
        </span>
      </div>
      <button @click="deleteFromCart" class="btn">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-cart-item",
  components: {},
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
  },
  watch: {},
  mounted() {
    console.log("mounted is here");
  },
};
</script>

<style scoped lang="scss">
.v-cart-item {
  &__quantity {
    display: flex;
    flex-direction: column;
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
  p {
    margin: 20px 0;
  }
  background-color: #635a27;
  color: white;
  flex-basis: 25%;
  box-shadow: 0px 0px 10px 0 rgb(0, 0, 0);
  padding: 24px;
  margin: 15px;
  &__img {
    max-width: 100px;
  }
  .btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;
  }
}
</style>
