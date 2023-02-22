<template>
  <div class='v-card-item'>
    <p> {{ title }}</p>
    <v-catalog/>
    <v-cart/>
  </div>
</template>

<script>
import vCart from './v-cart.vue'
import vCatalog from './v-catalog.vue'
export default {
  name: 'v-card-item',
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
.card-item {
  display: flex;
  justify-content: space-between;
  max-width: 900px;
  margin: 0 auto;
  align-items: center;
}
</style>
