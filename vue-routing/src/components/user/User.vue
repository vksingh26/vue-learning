<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <button class="btn btn-success" @click="navigateToHome">Go to Home</button>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
import HomeVue from '../Home.vue';

export default {
    methods: {
        navigateToHome() {
            this.$router.push('/');
            //this.$router.push({path: '/', component: HomeVue}) //navigation using path
        }
    },
}
</script>