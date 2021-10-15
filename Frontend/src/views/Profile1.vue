<template>
<div class="profile" id="list-of-sections">
    <Header />
    <profile />
</div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/profile/Header.vue'
import profile from  '../components/profile/profile.vue'

export default {
    name: 'Profile1',
    components: {
    Header,
    profile,
    }
}
</script>
