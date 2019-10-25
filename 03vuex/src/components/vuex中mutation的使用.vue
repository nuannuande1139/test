<template>
  <div>
    {{ storeMsg }}
    <br/>
    {{ num }}
    <button @click="add">点击</button>  
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  computed: {
    ...mapState({
      storeMsg: 'msg',
      num: 'num'
    })
  },
  methods: {
    add() {
      this.increment({
        count: 5
      })
    },
    ...mapMutations({
      increment: 'increment'
    })
  }
};
</script>

<style scoped>
</style>
