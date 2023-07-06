<template>
  <header>
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <RouterLink to="/" class="navbar-brand">ConnectMe</RouterLink>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item" v-if="!user">
              <RouterLink to="/signin" class="nav-link">Sign In</RouterLink>
            </li>
            <li class="nav-item" v-if="!user">
              <RouterLink to="/signup" class="nav-link">Sign Up</RouterLink>
            </li>
            <li class="nav-item" v-if="user">
              <button @click="logout" class="nav-link btn btn-outline-primary">Logout</button>
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

.navbar-toggler {
  border: none;
  outline: none;
}

.navbar-toggler-icon {
  background-color: #2c3e50;
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
  color: #da1299;
  border-color: #007bff;
  transition: all 0.3s ease;
}

.btn-outline-primary:hover {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}
</style>
