<template>
  <div class="v-main-wrapper">
    <h1>{{ title }}</h1>
    <!-- Чтобы все корректно отображалось и ничего не ломалось рекомендуется тег router-view помещать в тег keep-alive-->
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "v-main-wrapper",
  components: {},
  props: {},
  data() {
    return {
      title: "MY SHOP",
    };
  },
  computed: {
    ...mapGetters(["CART"]),
  },
  methods: {},
  watch: {},
};
</script>

<style lang="scss">
.v-main-wrapper {
  max-width: 1000px;
  padding: 20px;
  margin: 0 auto;
}
h1 {
  color: rgb(255, 230, 0);
}
</style>
