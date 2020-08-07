<template>
  <section class="container">
    <div class="title">
      <h1>{{ pageTitle }}</h1>
      <button type="button" class="btn btn-primary add" @click="addUser">Add</button>
    </div>

    <AddUser v-if="add" v-on:add_user="saveUser"/>
    
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Filter:</span>
      </div>
      <input type="text" class="form-control" placeholder="Username..." v-model="filterName" aria-label="Username" aria-describedby="basic-addon1">
    </div>

    <p v-if="loading">Loading...</p>
    <p v-if="usersEmpty">Users list is empty right now. You can add a new one using button "Add"</p>
    <ul class="list-group">
      <li v-for="user of users.filter(user => filterUser(user))" :key="user.id" class="list-group-item">
        <a href="#" @click.prevent="openUser(user)">{{ user.first_name + ' ' + user.last_name }}</a>
        <img src="../assets/close.svg" alt="close_icon" @click="deleteUser(user.id)">
      </li>
    </ul>

  </section>
</template>

<script>
import AddUser from '../components/AddUser.vue'



export default {
  components: {
    AddUser,
  },
  data() {
    return {
      pageTitle: "Users",
      loading: false,
      add: false,
      filterName: '',
      usersEmpty: false,
      
    };
  },
  computed: {
    users: {
      get() {
        return this.$store.getters.users;
      }
    }
  },
  mounted() {
    this.loading = false;
    this.$store.dispatch('GET_TODO');
  },
  methods: {
    deleteUser(id) {
      console.log("deleting", id);
      let xyu = this.users.filter(user => {
        if(user.id !== id) {
          return user;
        }
      });
      console.log("deleting", xyu);
      if(xyu.length === 0) this.usersEmpty = true; 
      this.$store.commit('setUsers', xyu);
    },
    addUser() {
      this.add = !this.add;
    },
    saveUser(user) {
      if(this.users.length === 0) {
        this.usersEmpty = false;
        user.id = 1;
      } else user.id = this.users[this.users.length - 1].id + 1;
      this.users.push(user);
      this.$store.commit('setUsers', this.users);
      this.add=false;
    },
    filterUser(user) {
      let fullName = user.first_name + ' ' + user.last_name;
      if(fullName.indexOf(this.filterName) !== -1) {
          return user;
      }
    },
    openUser(user) {
      this.$router.push({ path: '/' +  user.id });
    },
    
  },
};
</script>

<style lang="css">
@import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
p {
  text-align: center;
}
.list-group-item {
  display: flex;
  justify-content: space-between;
}
.list-group-item a {
  text-decoration: none;
  color: #000;
}
.list-group-item a:hover {
  color: rgb(115, 90, 255);
}
</style>
