
<template>
  <HeaderPage />
  <h1 class="text">Good Morning Welcome to Homepage!</h1>
</template>

<script>
import HeaderPage from './HeaderPage.vue';
export default{
  name: 'HomePage',
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