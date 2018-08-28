import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('g-icon',Button)
Vue.component('g-button', Button)
Vue.component('g-button-group',ButtonGroup)


new Vue({
    el: '#app',
    data: {
        message: "hi",
        loading1: false,
        loading2: true,
        loading3: false
    }
})