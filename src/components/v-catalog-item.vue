<template>
  <div class="v-catalog-item">
    <img
      :src="require('../assets/images/' + product_data.image)"
      alt="not found"
    />
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">{{ product_data.price }}</p>
    <p class="v-catalog-item__name">{{ product_data.about }}</p>
    <p class="v-catalog-item__name">{{ product_data.category }}</p>
    <button class="v-catalog-item__add_to_cart_btn" @click="sendDataPerant">
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
    sendDataPerant() {
      this.$emit("sendDataPerant", this.product_data.article);
    },
  },
};
</script>

<style lang="scss">
.v-catalog-item {
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
}
</style>
