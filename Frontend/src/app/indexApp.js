//alert("Hola Vue");
import vue from "vue";
import App from './components/App.vue'
import vuelidate from "vuelidate";
//import Login from './components/Login.vue'

new vue({
    render: h => h(App)
}).$mount('#app');

/*
new vue({
    render: h => h(Login)
}).$mount('#login');
*/
vue.use(vuelidate);