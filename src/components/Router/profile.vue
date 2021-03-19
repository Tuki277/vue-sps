<template>
  <div>
    <h1>profile</h1>
    <div class="box">
      <listProfile 
        :key="acc.id"
        v-for="acc in account"
        :acc="acc"
      />
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import listProfile from './listprofile'

export default {
  name: 'profile',
  components: {
    listProfile
  },
  data () {
    return {
      account : []
    }
  },
  created () {
    axios.get('http://localhost:3000/getall').then(res => {
      console.log(res.data.data)
      this.account = res.data.data
    })
  },
  methods: {
    showAccount () {
      var result = null
      if (this.accountRes > 0) {
        this.accountRes.map((data, index) => {
          console.log(data)
          console.log(index)
        })
      }
      return result
    }
  }
}
</script>

<style>

h1 {
  padding-bottom: 30px;
}

p span {
  margin-right: 5%;
}

button {
  color: red;
  border: 2px solid black;
  padding: 2px 10px 2px 10px;
}
</style>