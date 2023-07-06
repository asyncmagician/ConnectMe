<template>
  <div>
    <template v-if="user">
      <h1>Welcome, {{ getUsername() }}!</h1>
    </template>
    <template v-else>
      <h1>Welcome!</h1>
      <p>
        Introducing ConnectMe - the ultimate social network designed exclusively for developers.
      </p>
    </template>
  </div>
</template>

<script>
import { useUserStore } from '../stores/userStore.js';
import { mapState } from 'pinia';

export default {
  computed: {
    ...mapState(useUserStore, ['user']),
  },
  methods: {
    getUsername() {
      if (this.user) {
        return this.user.username;
      } else {
        return "Guest";
      }
    },
  },
};
</script>

<style scoped>
</style>
