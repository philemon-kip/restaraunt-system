<template>
  <HeaderPage />
  <h1 class="text">Welcome on the Update Restaurant Dashboard</h1>
  <form @submit.prevent="updateRestaurant"> <!-- Prevent form submission -->
    <input type="text" name="name" placeholder="Enter name" v-model="restaurant.name" />
    <input type="text" name="address" placeholder="Enter address" v-model="restaurant.address" />
    <input type="text" name="contact" placeholder="Enter contact" v-model="restaurant.contact" />
    <button type="submit">Update Restaurant</button>
  </form>
</template>

<script>
import HeaderPage from './HeaderPage.vue';
import axios from 'axios';
export default {
  name: 'UpdateRestaurant',
  components: {
    HeaderPage
  },
  data(){
    return {
      restaurant: {
        name: '',
        address: '',
        contact: ''
      }
    }
  },
  methods:{
    async updateRestaurant(){
      console.log(this.restaurant);
      const result = await axios.put('http://localhost:3000/restaurant/'+this.$route.params.id, {
        name: this.restaurant.name,
        address: this.restaurant.address,
        contact: this.restaurant.contact
      });
      if(result.status === 200){
        this.$router.push({name: 'HomePage'});
      }
      console.log(result);
    }
  },
 
  async mounted(){
      let user = localStorage.getItem('user-info');
      if(!user){
        this.$router.push({name: 'SignUp'});
      }
      const response = await axios.get("http://localhost:3000/restaurant/"+this.$route.params.id);
      console.warn(response.data);
      this.restaurant = response.data;
    }
}
</script>

<style>
.text{
  text-align: center;
  margin-top: 100px;
  font-size: 30px;
  color: #2C3E50;
}
form {
  max-width: 500px;
  margin: 50px auto; /* Centers the form on the page */
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

input {
  width: 100%;
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  color: #2C3E50;
  transition: border-color 0.3s ease;
}

input:focus {
  border-color: #3498DB; /* Blue border when input is focused */
  outline: none;
}

button {
  width: 100%;
  padding: 15px;
  background-color: #E74C3C;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #C0392B; /* Darker shade on hover */
}



/* Optional: media query for small screens */
@media (max-width: 768px) {
  form {
    padding: 15px;
  }

  input, button {
    padding: 12px;
    font-size: 16px;
  }
}

</style>