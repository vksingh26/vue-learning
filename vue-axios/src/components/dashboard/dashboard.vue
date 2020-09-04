<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Here we are calling the rest api using <b><i>Axios Custom Instance</i></b></p>
    <p><b><i><u>NOTE: </u></i></b> Please go through this session to learn more about axios</p>
    <ul style="width: 450px; margin:0 auto;">
      <li>Create request globally or on component level</li>
      <li>Create interceptors either for request or response</li>
      <li>Eject feature of axios interceptors</li>
      <li>Custom instance creation using axios</li>
      <li>Check request object in network tab for custom instance where I set Name: VIKASH</li>
      <li><b>AXIOS</b>Axios: https://github.com/axios/axios</li>
    </ul>
    <div class="container">
      <div class="content">
          <div v-for="(u, i) in usersArr" :key="i">
            <hr>
            <p>Email: {{u.email}}</p>
            <p>Age: {{u.age}}</p>
            <p>Country: {{u.country}}</p>
            <p>Hobbies: {{u.hobbies}}</p>
            
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { URL } from '../../constant';
import axios from '../../axios-auth'; //custom instance of axios

export default {
  data() {
    return {
      user: {
        email: "",
        age: "",
        country: "",
        hobbies:[],
      },
      usersArr: [],
    }
  },
  created() { //onload method lifecycle hook
    axios.get() //here we are calling the rest api through request level(component level)
          .then(res => {
            if(res.data && res.status === 200) {
              console.log(`User has been fetched succesfully!!!`);
              const data = res.data;
              const users = [];
              for(let key in data) {
                const user = data[key];
                user.id = key;
                users.push(user);
              }
              this.usersArr = users;
            }
          })
          .catch(error => {
            alert(`User can't be fetched due to` + error);
          })
  }
}
</script>
<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: rebeccapurple;
  }
 .content p {
   color: coral;
 }
</style>