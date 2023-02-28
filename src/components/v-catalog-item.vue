<template>
  <div class="v-catalog-item">
    <img
      class="v-catalog-item__image"
      :src="require('../assets/images/' + product_data.image)"
      alt="not found"
    />
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">{{ product_data.price }}</p>
    <p class="v-catalog-item__name">{{ product_data.about }}</p>
    <p class="v-catalog-item__name">{{ product_data.category }}</p>
    <button class="v-catalog-item__add_to_cart_btn btn" @click="addToCart">
      Add to cart
    </button>
  </div>
</template>

<script>
export default {
  name: "v-catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    addToCart() {
      this.$emit("addToCart2", this.product_data);
    },
  },
};
</script>

<style scoped lang="scss">
.v-catalog-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    margin: 10px 0;
    padding: 15px 30px;
    border-radius: 10px;
    background-color: #d2ff08;
  }
  p {
    margin: 20px 0;
  }
  background-color: #635a27;
  color: white;
  flex-basis: 25%;
  box-shadow: 0px 0px 10px 0 rgb(255, 209, 5);
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
