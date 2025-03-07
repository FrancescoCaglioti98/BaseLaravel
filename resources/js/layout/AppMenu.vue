<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'Home',
        items: [
            { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' },
            {
                label: 'Furgoni',
                icon: 'pi pi-fw pi-truck',
                items: [
                    { label: 'Lista', icon: 'pi pi-fw pi-bars', to: '/truck/index' },
                    { label: 'Nuovo', icon: 'pi pi-fw pi-plus', to: '/truck/new' },
                ]
            },
            { label: 'Calcolo', icon: 'pi pi-fw pi-calculator', to: '/load'}

        ]
    }
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
