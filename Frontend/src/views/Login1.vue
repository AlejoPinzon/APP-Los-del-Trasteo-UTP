<template>
<div class="login" id="list-of-sections">
    <Header />
    <login />
</div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/login/Header.vue'
import login from  '../components/login/login.vue'

export default {
    name: 'Login1',
    components: {
    Header,
    login,
    }
}
</script>
