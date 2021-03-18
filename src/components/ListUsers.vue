<template>
    <div>
        <h1>List user components</h1>
        <User 
            :key="user.id"
            v-for="user in email"
            :user="user"
        />
    </div>
</template>

<script>

import User from './User'

export default {
    name: "ListUsers",
    components: {
        User
    },
    props: [
        'email'
    ]
}
</script>

<style>

</style>