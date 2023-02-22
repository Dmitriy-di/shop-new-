<template>
  <div class="v-catalog-item">
    <p>item 1</p>
    <p>Price: 100</p>
    <button>A</button>
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
};
</script>

<style lang="scss"></style>
