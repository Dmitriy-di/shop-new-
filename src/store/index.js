import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
    cart: [],
    totalSum: 0,
  },
  getters: {
    PRODUCTS(state) {
      return state.products
    },
    CART(state) {
      return state.cart
    },
    TOTALSUM(state) {
      return state.totalSum
    },
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products
    },
    SET_CART: (state, product) => {
      state.cart.push(product)
    },
    SET_TOTALSUM: (state, totalSum) => {
      state.totalSum = totalSum
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1)
    }
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios(' http://localhost:3000/products', {
        method: "GET"
      })
        .then((products) => {
          commit('SET_PRODUCTS_TO_STATE', products.data)
          return products
        })
        .catch((error) => {
          console.log(error);
          return error
        })
    },
    ADD_TO_CART({ commit, getters }, product) {
      if (!(getters.CART.map(item => item.article).includes(product.article))) {
        commit('SET_CART', product)
      }
    },
    DELETE_FROM_CART({ commit, getters }, index) {
      getters.CART[index].quantity -= 1
      if (!(getters.CART[index].quantity)) commit('REMOVE_FROM_CART', index)
    }
  },
  modules: {
  }
})
