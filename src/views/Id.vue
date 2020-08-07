<template>
  <section>
    <h1>User {{$route.params.id}}</h1>
    <hr>
    <h2>Name: {{user.first_name + ' ' + user.last_name}}</h2>
    <h2>Email: {{user.email}}</h2>
  </section>
</template>

<script>
export default {
  computed: {
    user() {
      let users = this.$store.getters.users;
      let user = users.filter(user => {
        if(user.id == this.$route.params.id) {
          return user;
        }
      })[0];
      return user;
    },
  },
  data() {
      return {
      };
  },
  
}
</script>

<style lang="css">
h1 {
  text-align: center;
}
</style>