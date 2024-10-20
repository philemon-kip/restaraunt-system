<template>
  <div class="login-container">
    <img class="logo" src="../assets/logo.png" alt="logo">
    <h1>Login</h1>
    <form class="login-form" @submit.prevent="login">
      <input type="email" v-model="email" placeholder="Enter Email" required>
      <input type="password" v-model="password" placeholder="Enter Password" required>
      <button type="submit" >Login</button>
      <p class="signup-link">
        Don't have an account? <router-link to="/sign-up">Sign Up</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        const response = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);
        
        if (response.status == 200 && response.data.length > 0) {
          localStorage.setItem('user-info', JSON.stringify(response.data[0]));
          this.$router.push({ name: 'HomePage' });
        } else {
          // Handle unsuccessful login
          console.error('Login failed: No token received');
        }
      } catch (error) {
        console.error('Login error:', error);
        // Handle login error (e.g., show error message to user)
      }
    }
  },
  mounted() {
    const userToken = localStorage.getItem('user-info');
    if (userToken) {
      this.$router.push({ name: 'HomePage' });
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  font-family: 'Roboto', Arial, sans-serif;
  padding: 20px;
  box-sizing: border-box;
}

.logo {
  width: 120px;
  height: 120px;
  object-fit: contain;
  margin-bottom: 20px;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
}

h1 {
  color: #ffffff;
  font-size: 2.5rem;
  margin-bottom: 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  font-weight: 700;
}

.login-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  background-color: rgba(255, 255, 255, 0.95);
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

input {
  margin-bottom: 20px;
  padding: 15px;
  border: none;
  border-radius: 8px;
  background-color: #f5f5f5;
  font-size: 1rem;
  transition: all 0.3s ease;
}

input:focus {
  background-color: #ffffff;
  outline: none;
  box-shadow: 0 0 0 2px #a777e3;
  transform: translateY(-2px);
}

button {
  background-color: #6e8efb;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
}

button:hover {
  background-color: #5c7cfa;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(92, 124, 250, 0.4);
}

.signup-link {
  margin-top: 20px;
  text-align: center;
  font-size: 0.9rem;
  color: #666;
}

.signup-link a {
  color: #6e8efb;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.signup-link a:hover {
  color: #5c7cfa;
  text-decoration: underline;
}

@media (max-width: 480px) {
  .login-form {
    padding: 30px;
  }

  h1 {
    font-size: 2rem;
  }
}
</style>