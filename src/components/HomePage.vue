
<template>
  <h1>Good Morning Welcome to Homepage!</h1>
</template>

<script>
export default{
  name: 'HomePage',
  mounted(){
      let user = localStorage.getItem('user-info');
      if(!user){
        this.$router.push({name: 'SignUp'});
      }
    }
}

</script>