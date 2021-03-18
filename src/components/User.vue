<template>
    <div>
        <p>User component</p>
        <p> email : {{ user.email }} </p>
    </div>
</template>

<script>
export default {
    props: [
        'user'
    ]
}
</script>

<style>

</style>