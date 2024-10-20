<template>
  <HeaderPage />
  <h1 class="text">Welcome on the Add Restaurant Dashboard</h1>
</template>
<script>
import HeaderPage from './HeaderPage.vue';
export default {
  name: 'AddRestaurant',
  components: {
    HeaderPage
  },
  mounted(){
      let user = localStorage.getItem('user-info');
      if(!user){
        this.$router.push({name: 'SignUp'});
      }
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
</style>