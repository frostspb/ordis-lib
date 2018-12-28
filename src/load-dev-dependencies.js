import 'material-design-icons-iconfont/dist/material-design-icons.css'; // Ensure you are using css-loader
import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader
import Vue from 'vue';
import Vuetify from 'vuetify';

import OrdisActionButton from './lib-components/OrdisActionButton.vue'
import OrdisCardPage from './lib-components/OrdisCardPage.vue'
import OrdisDatepicker from './lib-components/OrdisDatepicker.vue'


// install vuetify and any other dependencies
Vue.use(Vuetify);


// Mount custom component in div provided by vue cli dev server
var x = new Vue({
    render: h => h(OrdisCardPage, { props: { pageIcon: 'refresh', pageTitle: 'Test Page' } },
        [
            h(OrdisDatepicker, { props: { lbTitle: 'my data', dt: new Date().toISOString().substr(0, 10) }, slot: 'content' }),
            h(OrdisActionButton, { props: { btnIcon: 'mail', iconColor: 'red' }, slot: 'menu' }),
            h(OrdisActionButton, { props: { btnIcon: 'call', btnTooltip: 'call me' }, slot: 'content' }),
        ]
    )
})
x.$mount('#app');
