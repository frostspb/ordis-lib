import 'material-design-icons-iconfont/dist/material-design-icons.css'; // Ensure you are using css-loader
import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader
import Vue from 'vue';
import Vuetify from 'vuetify';

import * as components from "./lib-components/index";


// install vuetify and any other dependencies
Vue.use(Vuetify);


// Mount custom component in div provided by vue cli dev server
var x = new Vue({
    render: h => h(components.OrdisCardPage, { props: { pageIcon: 'refresh', pageTitle: 'Test Page' } },
        [
            h(components.OrdisDatepicker, { props: { lbTitle: 'my data', dt: new Date().toISOString().substr(0, 10) }, slot: 'content' }),
            h(components.OrdisActionButton, { props: { btnIcon: 'mail', iconColor: 'red' }, slot: 'menu' }),
            h(components.OrdisActionButton, { props: { btnIcon: 'call', btnTooltip: 'call me' }, slot: 'content' }),
            h(components.OrdisEditorWindow, { props: { windowTitle: 'Editor window' }, slot: 'content' }),
        ]
    )
})
x.$mount('#app');
