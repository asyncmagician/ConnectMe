<template>
  <header>
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand">ConnectMe</a>
        <div class="navbar-collapse justify-content-end">
          <ul class="navbar-nav">
            <li class="nav-item" v-if="!user">
              <RouterLink to="/signin" class="nav-link">Sign In</RouterLink>
            </li>
            <li class="nav-item" v-if="!user">
              <RouterLink to="/signup" class="nav-link">Sign Up</RouterLink>
            </li>
            <li class="nav-item" v-if="user">
              <RouterLink to="/" class="nav-link">Home</RouterLink>
            </li>
            <li class="nav-item" v-if="user">
              <button @click="logout" class="nav-link btn btn-outline-primary">Log Out</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import { useUserStore } from './stores/userStore.js';
import { mapState, mapActions } from 'pinia';

export default {
  computed: {
    ...mapState(useUserStore, ['user']),
  },
  mounted() {
    this.checkUser();
  },
  methods: {
    ...mapActions(useUserStore, ['getUser', 'logoutUser', 'loginUser']),

    async checkUser() {
      const jwt = localStorage.getItem('token');
      await this.getUser(jwt);
      console.log("app vue ", this.user);
    },

    logout() {
      localStorage.removeItem('token');
      this.logoutUser();
      console.log(this.user);
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
#nav {
  padding: 20px;
  background-color: #f8f9fa;
}

.navbar-brand {
  font-size: 24px;
  font-weight: bold;
  color: #2c3e50;
}

.navbar-nav .nav-link {
  font-size: 16px;
  color: #2c3e50;
}

.navbar-nav .nav-link:hover,
.navbar-nav .nav-link.router-link-exact-active {
  color: #fff;
  background-color: #007bff;
}

.btn-outline-primary {
  font-size: 16px;
  color: #007bff;
  border-color: #007bff;
}

.btn-outline-primary:hover {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}
</style>
