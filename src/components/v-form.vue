<template>
  <div class="v-form" @click.self="closeModal" v-if="isVisible">
    <form class="v-form__block">
      <input
        v-model="price"
        class="v-form__input"
        type="text"
        placeholder="price"
      />
      <input
        v-model="category"
        class="v-form__input"
        type="text"
        placeholder="category"
      />
      <input
        v-model="about"
        class="v-form__input"
        type="text"
        placeholder="about"
      />
      <input
        v-model="name"
        class="v-form__input"
        type="text"
        placeholder="name"
      />
      <!-- <button
        :disabled="isValid"
        class="v-form__btn-is-valid"
        @click="addToCatalog"
      >
        Добавить
      </button> -->
      <button class="v-form__btn-is-valid" @click="addToCatalog">
        Добавить
      </button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "v-form",
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      price: "",
      category: "",
      about: "",
      name: "",
      fromObj: {},
    };
  },
  computed: {},
  methods: {
    ...mapMutations(["SET_CART_NEW_PRODUCT"]),
    closeModal() {
      this.$emit("closeModal");
    },
    addToCatalog() {
      this.fromObj = {
        price: Number(this.price),
        category: this.category,
        about: this.about,
        image: "1.png",
        name: this.name,
        article: "T19",
        available: true,
        quantity: 0,
      };
      console.log(this.fromObj);
      this.SET_CART_NEW_PRODUCT(this.fromObj);
    },
    //  isValid() {
    //    return Boolean(this.price && this.category && this.about);
    //  },
  },
};
</script>

<style lang="scss">
.v-form {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  //   overflow: hidden;
  &__block {
    width: 400px;
  }

  &__input {
    color: white;
  }
  &__btn-is-valid {
    margin: 10px 0;
    padding: 15px 30px;
    border-radius: 10px;
    background-color: #d2ff08;
    font-size: 20px;
    &:hover {
      color: #d2ff08;
      background-color: rgb(75, 74, 74);
    }
    &[disabled] {
      background-color: rgb(66, 66, 66);
      color: red;
      pointer-events: none;
      border: 2px solid red;
    }
  }
}
</style>
