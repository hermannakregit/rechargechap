import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import axios from 'axios'

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* animate css */
import 'animate.css';

/* Tailwind css */
import '../public/assets/css/style.css';

const app = createApp(App)
  .use(IonicVue)
  .use(store)
  .use(router, axios);


/* axios defauk URl */
//const devUrl = 'http://localhost:8000'
const testUrl = 'http://app.rechargement.test.mutuelleawoundjo.com/'
//const prodUrl = ''

axios.defaults.baseURL = testUrl

  
router.isReady().then(() => {
  app.mount('#app');
});