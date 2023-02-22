<template>
  <div class='v-main-wrapper'>
    <p> {{ title }}</p>
    <v-catalog/>
    <v-cart/>
  </div>
</template>

<script>
import vCart from './v-cart.vue'
import vCatalog from './v-catalog.vue'
export default {
  name: 'v-main-wrapper',
  components: {
    vCart,
    vCatalog
  },
  props: {},
  data () {
    return {
      title: 'hello folks'
    }
  },
  computed: {},
  methods: {},
  watch: {},
  mounted () {
    console.log('mounted is here')
  }
}
</script>

<style lang='scss'>
.v-main-wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-basis: 25%;
  align-items: center;
  box-shadow: 3px 2px 3px 0 yellow;
  padding: 24px;
  margin: 15px;
}
</style>
