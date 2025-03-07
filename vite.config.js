import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import tailwindcss from "@tailwindcss/vite";
import Components from 'unplugin-vue-components/vite';
import { PrimeVueResolver } from '@primevue/auto-import-resolver';


export default defineConfig({
    optimizeDeps: {
        noDiscovery: false
    },
    plugins: [
        Components({
            resolvers: [PrimeVueResolver()]
        }),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js', 'resources/js/assets/styles.scss'],
            refresh: true,
        }),
        vue(),
        tailwindcss()
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.esm-bundler.js', // Configura Vue per la runtime compilation
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
});
