<template>
  <div class="v-form" @click.self="closeModal" v-if="isVisible">
    <form @submit.prevent class="v-form__block">
      <input
        @input="changeValid"
        v-model="price"
        class="v-form__input"
        type="text"
        placeholder="price"
      />
      <input
        @input="changeValid"
        v-model="category"
        class="v-form__input"
        type="text"
        placeholder="category"
      />
      <input
        @input="changeValid"
        v-model="about"
        class="v-form__input"
        type="text"
        placeholder="about"
      />
      <input
        v-model="name"
        @input="changeValid"
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
      <button
        :class="isValid ? 'v-form__btn-is-valid' : 'v-form__btn-not-is-valid'"
        class="v-form__btn-is-valid"
        @click="addToCatalog"
      >
        Добавить
      </button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { v4 as uuidv4 } from "uuid";

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
      isValid: false,
    };
  },
  watch: {},
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
        article: uuidv4(),
        available: true,
        quantity: 0,
      };
      this.SET_CART_NEW_PRODUCT(this.fromObj);
    },
    changeValid() {
      this.isValid = Boolean(
        this.price && this.category && this.about && this.name
      );
    },
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
  background-color: rgba(0, 0, 0, 0.9);
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
  }
  &__btn-not-is-valid {
    background-color: rgb(66, 66, 66) !important;
    color: red;
    pointer-events: none;
    border: 2px solid red;
  }
}
</style>
