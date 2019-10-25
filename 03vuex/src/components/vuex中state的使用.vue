<template>
  <div>
    {{ storeMsg }}
    {{ msg }}
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      msg: 'hello'
    };
  },
  computed: {
    ...mapState({
      storeMsg: 'msg'
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
