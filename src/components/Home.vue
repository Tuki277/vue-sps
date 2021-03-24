<template>
    <div>
        <router-link to="/" class="login">Home</router-link> --
        <router-link to="/login" class="login">login</router-link>
        <Header :title="title" />
        <img alt="Vue logo" src="./../assets/logo.png" />
        <ListUser :email="email"/>
    </div>
</template>

<script>

import Header from './Header'
import ListUser from './ListUsers'

export default {
    components: {
        Header,
        ListUser
    },
    data() {
      return {
          title: "Hello Vue js",
          email: [
            { id: 1, email: "test1@gmail.com", active: true },
            { id: 2, email: "test2@gmail.com", active: false },
            { id: 3, email: "test3@gmail.com", active: true },
            { id: 4, email: "test4@gmail.com", active: false },
            { id: 5, email: "test5@gmail.com", active: true },
        ]
      }
  }
}
</script>

<style>
.login {
    font-size: 40px;
}
</style>