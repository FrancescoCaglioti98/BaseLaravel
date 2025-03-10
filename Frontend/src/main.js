import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import {createPinia} from "pinia";

import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import Lara from "@primeuix/themes/lara";

import '@/assets/styles.scss';

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(PrimeVue, {
    theme: {
        preset: Lara,
        options: {
            darkModeSelector: '.app-dark'
        }
    }
});
app.use(ToastService);
app.use(ConfirmationService);

app.mount('#app');
