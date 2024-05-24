import './assets/main.css'

import { createApp } from 'vue'
import {router} from "@/client/router/router.js";
import 'bootstrap/dist/css/bootstrap.css'

import App from './App.vue'
createApp(App).use(router).mount('#app')
