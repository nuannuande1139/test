<template>
  <div>
    {{ storeMsg }}
    {{ todo }}
  </div>
</template>

<script>

import { mapState, mapGetters } from 'vuex';

export default {
  data() {
    return {
      val: 'aaaaaaaa'
    };
  },
  computed: {
    ...mapState({
      storeMsg: 'msg'
    }),
    ...mapGetters({
      todo: 'todo'
    })
  }
};
</script>

<style scoped>
</style>
