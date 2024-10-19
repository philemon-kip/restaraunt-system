<template>
  <div class="signup-container">
    <img class="logo" src="../assets/logo.png" alt="logo">
    <h1>Signup</h1>
    <div class="register">
      <input type="text" placeholder="Enter Name">
      <input type="email" placeholder="Enter Email">
      <input type="password" placeholder="Enter Password">
      <button>Sign Up</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
}
</script>

<style scoped>
.signup-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  font-family: Arial, sans-serif;
}

.logo {
  width: 120px;
  height: 120px;
  object-fit: contain;
  object-position: center;
  margin-bottom: 20px;
}

h1 {
  color: #ffffff;
  font-size: 2.5rem;
  margin-bottom: 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.register {
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

input {
  margin-bottom: 15px;
  padding: 12px;
  border: none;
  border-radius: 5px;
  background-color: #f0f0f0;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

input:focus {
  background-color: #ffffff;
  outline: none;
  box-shadow: 0 0 0 2px #a777e3;
}

button {
  background-color: #6e8efb;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #5c7cfa;
}
</style>