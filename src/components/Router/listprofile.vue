<template>
    <div>
        <p>
            <span>username : {{ acc.account }} </span>
            <router-link :to="`/profile/${ acc.id }`">Show</router-link>
        </p>
    </div>
</template>

<script>

export default {
    props: [
        'acc',
    ]
}

</script>
 
<style>

</style>