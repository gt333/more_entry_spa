import 'es6-promise/auto';
import Vue from 'vue'
import App from './App';
import 'lib-flexible';
import '@/assets/css/font/iconfont.css';
import router from '@router/demo1/index';
import FastClick from 'fastclick';
Vue.config.productionTip = false
if ('addEventListener' in document) {  
    document.addEventListener('DOMContentLoaded', function() {  
        FastClick.attach(document.body);  
    }, false);  
}

document.addEventListener('readystatechange',loadVue,false);
function loadVue() {
    if(document.readyState == "complete") {//当页面加载状态 
        document.removeEventListener('readystatechange',loadVue,false)
        document.querySelector('#loading').style.display='none';
        new Vue({
            el: '#app',
            router,
            template: '<App/>',
            components: { App },
        });
    }
}

