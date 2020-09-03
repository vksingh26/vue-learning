<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing: Some cool feature vue provides (Must Check: Router link, Name, tag, params etc )</h1>
                <hr>
                <app-header></app-header>
                <!-- <router-view name="header-top"></router-view> this we need to configure in our router.js file-->
                <router-view></router-view>
                <!-- <router-view name="header-bottom"></router-view> -->
            </div>
        </div>
    </div>
</template>

<script>
import HeaderVue from './components/Header.vue'
    export default {
        components: {
            appHeader: HeaderVue
        }
    }
</script>

<style>
</style>
