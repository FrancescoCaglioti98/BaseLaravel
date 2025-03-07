import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import Aura from '@primeuix/themes/aura';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import ConfirmDialog from 'primevue/confirmdialog';


import {
    Toast,
    Button,
    Menu,
    DataTable,
    Column,
    SelectButton,
    InputText,
    Password,
    Checkbox,
    InputNumber,
    Message,
    FloatLabel,
    Card,
    Select,
    Panel
} from "primevue";
import {Form} from "@primevue/forms";

import './assets/styles.scss';

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.app-dark'
        }
    },
});
app.use(ToastService);
app.use(ConfirmationService);
app.component('Toast',Toast);
app.component('Button',Button);
app.component('Menu',Menu);
app.component('DataTable',DataTable);
app.component('Column',Column);
app.component('SelectButton',SelectButton);
app.component('InputText',InputText);
app.component('Password',Password);
app.component('Checkbox',Checkbox);
app.component('Message',Message);
app.component('Form',Form);
app.component('FloatLabel',FloatLabel);
app.component('InputNumber',InputNumber);
app.component('ConfirmDialog',ConfirmDialog);
app.component('Card',Card);
app.component('Select',Select);
app.component('Panel',Panel);

app.mount('#app');
