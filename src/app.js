import Vue from 'vue'
import Button from './button.vue'
import Icon from './icom'
Vue.component('g-icon',Button)
Vue.component('g-button', Button)

new Vue({
    el: '#app',
    data: {
        message: "hi",
        loading1: false,
        loading2: true,
        loading3: false
    }
})