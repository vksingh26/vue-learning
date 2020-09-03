<template>
    <div>
        <h3>Some User Details</h3>
        <hr>
        <p>User loaded has ID: {{$route.params.id}}</p>
        <hr>
        <router-link tag="button" 
        :to="{name: 'userEdit', 
        params: {id: $route.params.id}, query: {locale: 'en', q: '100'}}" 
        class="btn btn-warning">Edit User</router-link>
        <!-- here in the above line of code we are setting params dynamically -->
    </div>
</template>
<script>
export default {
    
}
</script>