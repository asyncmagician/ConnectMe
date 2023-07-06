<script setup>
import axios from 'axios';
import {useRouter} from "vue-router";

const user = {
  username: '',
  password: ''
};

const router = useRouter();

const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await axios.post('http://localhost:3001/auth/signUp', user);
    console.log(response.data);
    await router.push('/signIn')
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      console.error(error.response.data.error);
    } else {
      console.error(error.message);
    }
  }
};
</script>

<template>
  <div class="signup-container">
    <h1 class="signup-title">Join us!</h1>
    <form @submit="handleSubmit" class="signup-form">
      <div class="form-group">
        <label for="username" class="form-label">Username</label>
        <input type="text" class="form-control" name="username" id="username" placeholder="John Doe" v-model="user.username" required>
      </div>
      <div class="form-group">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" name="password" id="password" placeholder="Use https://github.com/asyncmagician/QuickGenius" v-model="user.password" required>
      </div>
      <div class="form-group">
        <input type="submit" value="Register" class="btn btn-primary">
      </div>
    </form>
  </div>
</template>

<style scoped>
.signup-container {
  max-width: 400px;
  margin: 0 auto;
  margin-top: 150px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.signup-title {
  text-align: center;
  margin-bottom: 20px;
}

.signup-form {
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
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
