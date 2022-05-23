import { createApp } from 'vue';
import App from './App.vue';
import mitt from 'mitt';

let emitter = mitt();
let app = createApp(App);
// 글로벌 변수 보관함
app.config.globalProperties.emitter = emitter;

app.mount('#app');
