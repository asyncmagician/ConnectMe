<template>
  <div class="login-container">
    <template v-if="!userStore.isLoggedIn">
      <h1 class="login-title">Sign In</h1>
      <form @submit.prevent="submitForm" class="login-form">
        <div class="form-group">
          <label for="username" class="form-label">Username</label>
          <input type="text" class="form-control" v-model="username" id="username" required>
        </div>
        <div class="form-group">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" v-model="password" id="password" required>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary">Sign In</button>
        </div>
      </form>
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    </template>
    <p class="text-danger fs-3 text-center" v-else>You are already logged in.</p>
  </div>
</template>

<script setup>
import axios from 'axios';
import { useUserStore } from '../stores/userStore.js';

const userStore = useUserStore();

let username = '';
let password = '';
let errorMessage = '';

const submitForm = async () => {
  try {
    const response = await axios.post('http://localhost:3001/auth/signIn', { username, password });
    console.log(response.data);

    const token = response.data.token;
    localStorage.setItem('token', token);

    userStore.loginUser(response.data.user);
    window.location.href = "/";
  } catch (error) {
    if (error.response && error.response.status === 401) {
      errorMessage = 'Invalid credentials. Please try again.';
    } else {
      errorMessage = 'An error occurred during login.';
    }
    console.error(error);
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  margin-top: 150px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login-title {
  text-align: center;
  margin-bottom: 20px;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

.form-label {
  font-weight: bold;
}

.btn-primary {
  background-color: #a8279a;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>
