// filepath: /C:/laragon/www/tss-vue/src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
// @ts-ignore
import router from './router';

createApp(App).use(router).mount('#app')
