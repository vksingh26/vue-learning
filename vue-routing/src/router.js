import Home from './components/Home.vue';
//import Header from './components/Header.vue';

// Lazy loading
// Lazy loading means we want to load a component when we need it. So if we want user to load we will segregate is like below user code, then it will load only user component not userdetails or user edit
// we can group then in one component using 'user'
const User = resolve => {
    require.ensure(['./components/user/User.vue'], ()=> {
        resolve(require('./components/user/User.vue'))
    }, 'user')
}
const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], ()=> {
        resolve(require('./components/user/UserStart.vue'))
    }, 'user')
}

const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], ()=> {
        resolve(require('./components/user/UserEdit.vue'))
    }, 'user')
}
const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], ()=> {
        resolve(require('./components/user/UserDetail.vue'))
    }, 'user')
}

// we can group the components by using 'user' like above code. It means now all the components related to user will laod in one shot instead of loading one by one.
// But if we want to load components one by one lazily then we need to remove 'user', then all the components will load one by one on requiement, meaning whenever we require then only it will laod.
// end of lazy loading

export const routes = [
    {path: '', component: Home},
    //{path: '', components: {  this we need to configure in our app.vue component
    //    default: Home,
    //    'header-top': Header;
    //}}
    {path: '/user', component: User, children: [
        {path: '/', component: UserStart},
        {path: ':id', component: UserDetail},
        {path: ':id/edit', component: UserEdit, name:'userEdit'},  //name to handle params dynamically in object form check userDetail page
        
    ]},
    {path: '*', redirect:'/'} 
]