<template>
  <div class="nav">
    <div class="logo-container">
      <img class="logo" src="../assets/logo.png" alt="logo">
    </div>
    <div class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/add">Add Restaurant</router-link>
      <router-link to="/update">Update Restaurant</router-link>
      <a href="#" @click.prevent="logout">Logout</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderPage',
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({name: 'LoginPage'});
    }
  }
}
</script>

<style scoped>
.nav {
  background-color: #2C3E50; /* Dark blue-gray background */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  padding: 0.5rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  width: 350px;
  height: 50px;
  object-fit: contain;
  margin-right: 1rem;
}

.nav-links {
  display: flex;
  align-items: center;
}

.nav-links a {
  color: #ECF0F1; /* Light gray text for contrast */
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.nav-links a:hover {
  color: #E74C3C; /* Vibrant red for hover state */
  background-color: rgba(231, 76, 60, 0.1); /* Light red background on hover */
}

@media (max-width: 768px) {
  .nav {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
    background-color: #34495E; /* Slightly lighter background for mobile */
  }

  .logo-container {
    margin-bottom: 1rem;
  }

  .nav-links {
    flex-direction: column;
    width: 100%;
  }

  .nav-links a {
    margin: 0.5rem 0;
    width: 100%;
    text-align: left;
    border-bottom: 1px solid #ECF0F1; /* Light separator between links */
  }

  .nav-links a:last-child {
    border-bottom: none; /* Remove border from last item */
  }
}
</style>