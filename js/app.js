
// import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
// import MyComponent from './index_component.vue'
// import { createApp, ref } from 'vue'
// const { createVuetify } = 'Vuetify';

import { createApp } from 'https://cdn.jsdelivr.net/npm/vue@3.2.47/dist/vue.global.prod.js';
// import Vuetify from 'https://cdn.jsdelivr.net/npm/vuetify@3.6.13/dist/vuetify.min.js';
import PrimeVue from 'https://unpkg.com/primevue/umd/primevue.min.js';
import indexComponent from './index_component.js'

// import 'https://unpkg.com/primevue/resources/primevue.min.css';
// import 'https://unpkg.com/primevue/resources/themes/saga-blue/theme.css';
// import DatePicker from 'https://unpkg.com/primevue/datepicker/datepicker.min.js';

        // const { createVuetify } = Vuetify;
        // const vuetify = createVuetify()
// const vuetify = createVuetify();

const app = createApp(indexComponent)
// .use(vuetify)
// app.use(vuetify);
        app.use(PrimeVue.Config, {
            theme: {
                preset: PrimeVue.Themes.Aura
            }
        });
app.component('p-datepicker', DatePicker);
app.mount('#app')

// Vue.component('MyComponent', require('./index_component.vue'));
// const vuetify = createVuetify()
// createApp(indexComponent).mount('#app')
/* const app = createApp({
    setup() {
      return {
        count: ref(0)
      }
    }
  }).mount('#app') */

//   app.component('indexComponent', indexComponent)