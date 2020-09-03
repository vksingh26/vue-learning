<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>
          <b>
            <u>Http In Vue</u>
          </b>
        </h1>
        <hr />
        <div class="form-group">
          <label>Username</label>
          <input type="text" class="form-control" v-model="user.userName" />
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="text" class="form-control" v-model="user.userEmail" />
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
        <hr />
        <button class="btn btn-primary" @click="fetchData">Get User Data</button>
        <br />
        <br />
        <ul class="list-group">
          <li class="list-group-item" v-for="(u, i) in usersArr" :key="i">
            <span>UserName: {{u.userName}} --</span>
            <span>UserEmail: {{u.userEmail}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <h1>HTTP Options in Vue</h1>
      <hr />
      <p>
        <u>
          <b>
            <i>Note:</i>
          </b>
        </u> We can set options on root level in vue. Like setting http url or header etc. Please go through thi code for more details
      </p>
      <div>
        <u>
          <b>
            <i>Example:</i>
          </b>
        </u>
        <li>Vue.http.options.root = URL this one for setting the url which will work globally</li>
        <li>Vue.http.options.header = Header for setting header same like root url</li>
        <li>
          Here we can set
          <u>
            <b>
              <i>Interceptors</i>
            </b>
          </u> too to modify our request before sending and receiving data to server or from server. For more details please check the code
        </li>
        <li>So if you see in the code there we haven't put the 'URL' in 'POST' or 'GET' method, why because we added our URL on root level as defined in first point</li>
        <li>
          We can create custom resource too. Check
          <u>
            <b>
              <i>Vue-resource github</i>
            </b>
          </u>.
        </li>
        <li>vue-resource on Github: https://github.com/yyx990803/vue-resource</li>
        <li>Some Code Recipes for vue-resource: https://github.com/yyx990803/vue-resource/blob/master/docs/recipes.md</li>
        <li>Template URLs: https://medialize.github.io/URI.js/uri-template.html</li>
        <li>Requests and Responses (incl. Different File Formats): https://github.com/yyx990803/vue-resource/blob/master/docs/http.md</li>
      </div>
    </div>
  </div>
</template>

<script>
import { API_ENDPOINT } from "./constant";
export default {
  data() {
    return {
      user: {
        userName: "",
        userEmail: "",
      },
      usersArr: [],
      resource: {},
    };
  },
  methods: {
    submit() {
      this.$http.post("", this.user).then(
        (response) => {
          console.log(response);
          this.user = "";
        },
        (error) => {
          console.log(error);
        }
      );
      //Uncomment above code which will work in same manner like the below line of code which is written in less lines but comment below to see the action
      //this.resource.save({}, this.user); //here we are using custom resource which is defined inside data methods
    },
    fetchData() {
      this.$http
        .get("") //no need to enter url here as we have declared the URL on root level.
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const resultArr = [];
          for (let key in data) {
            resultArr.push(data[key]);
          }
          this.usersArr = resultArr;
        });
    },
  },
  created() {
    //here we are initialising the resource on created life ccycle hook
    this.resource = this.$resource("data.json"); //$resource is coming from vue and data.json should be added at the last of the url
  },
};
</script>

<style lang="scss">
</style>
