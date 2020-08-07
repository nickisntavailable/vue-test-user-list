<template>
  <section class="add">
    <h2>Lets create a new User!</h2>
    <form>
    <div class="form-group">
      <label for="f_name">First Name</label>
      <input type="text" class="form-control" id="f_name" v-model="user.first_name">
    </div>
    <div class="form-group">
      <label for="l_name">Last Name</label>
      <input type="email" class="form-control" id="l_name" v-model="user.last_name">
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Email</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="user.email">
    </div>
    <div class="text-center">
      <button type="submit" class="btn btn-primary save" @click.prevent="saveUser">Save it!</button>
    </div>
  </form>
  </section>
</template>

<script>
export default {
  data() {
      return {
        user: {
            first_name: '',
            last_name: '',
            email: '',
            id: '',
            avatar: '',
        }, 
        empty: false,
      };
  },
  methods: {
      saveUser() { 
          if(this.user.first_name && this.user.last_name && this.user.email) {
              this.$emit('add_user', this.user);
              this.empty = false;
          } else {
              this.empty = true;
          }

          
      }
  }
  
}
</script>

<style lang="css">
h2 {
  text-align: center;
}
.add {
  margin-bottom: 30px;
}

</style>