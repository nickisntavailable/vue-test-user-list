<template>
  <section>
    <form>
      <label for="filter">Type to filter names: </label>
      <input type="text" id="filter" v-model="filterName">
    </form>
    <p v-if="loading">Loading...</p>
    <p v-if="usersEmpty">Users list is empty right now. You can add a new one using button "Add"</p>
    <ul>
      <li v-for="user of users.filter(user => filterUser(user))" :key="user.id">
        <a href="#" @click.prevent="openUser(user)">{{ user.first_name + ' ' + user.last_name }}</a>
        <img src="../assets/close.svg" alt="close_icon" @click="deleteUser(user.id)">
      </li>
    </ul>
  </section>
</template>

<script>
export default {
    computed: {
        users() {
            return this.$store.getters.users;
        }
    },
    data() {
        return {
            loading: false,
            add: false,
            filterName: '',
            usersEmpty: false,
        };
    },
  methods: {
        
  }
  
}
</script>