<template>
  <p>username : {{ this.account.account }} | password : {{ this.account.password }} </p>
</template>

<script>

import axios from 'axios'

export default {
    name: 'profileDetail',

    data () {
        return {
            id : this.$route.params.id,
            account : {}
        }
    },

    created () {
        axios.get('http://localhost:3000/getprofile/' + this.id).then(res => {
            console.log(res.data.data[0])
            this.account = res.data.data[0]
        }).then(err => {
            console.log(err)
        })
    }
};
</script>

<style>
</style>