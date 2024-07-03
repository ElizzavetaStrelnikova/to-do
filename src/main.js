import { createApp } from 'vue';
import App from './App.vue';
import components from '@/components/UI';
import router from './router/index.js';
import store from './store/index.js';  // Импортируем ваш store

const app = createApp(App)
    .use(router)
    .use(store);   // Используем store

components.forEach((component) => {
    app.component(component.name, component);
});

app.mount('#app');