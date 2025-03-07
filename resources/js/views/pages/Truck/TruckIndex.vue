<script>
import internalApiClient from "../../../api/internalApiClient.js";

export default {
    data() {
        return {
            trucks: [],
            loading: false
        };
    },
    methods: {
        async popolateTable() {
            this.loading = true;
            internalApiClient.get("/trucks")
                .then(response => {
                    this.trucks = response.data.data;
                })
                .catch(errors => {
                    this.$toast.add({
                        severity: 'error',
                        summary: 'Errore',
                        detail: 'Errore nel recupero delle informazioni',
                        life: 3000
                    });
                });
            this.loading = false;
        },
        deleteTruck(truckId) {
            this.$confirm.require({
                message: 'Confermi la cancellazione?',
                header: 'Cancellazione dati',
                icon: 'pi pi-info-circle',
                rejectProps: {
                    label: 'Annulla',
                    severity: 'secondary',
                    outlined: true
                },
                acceptProps: {
                    label: 'Cancella',
                    severity: 'danger'
                },
                accept: () => {
                    this.deleteTruckAction(truckId)
                },
                reject: () => {

                }
            });
        },
        deleteTruckAction(truckId) {
            internalApiClient.delete("/trucks/" + truckId)
                .then(response => {
                    this.$toast.add({
                        severity: 'success',
                        summary: 'Eliminato',
                        detail: 'Furgone correttamente eliminato',
                        life: 3000
                    });
                    this.popolateTable();
                })
                .catch(errors => {
                    this.$toast.add({
                        severity: 'error',
                        summary: 'Errore',
                        detail: 'Errore nel recupero delle informazioni',
                        life: 3000
                    });
                });
        }
    },
    created() {
        this.popolateTable();
    }
}
</script>

<template>

    <div class="grid grid-cols-12 gap-8">
        <div class="col-span-12 xl:col-span-12">
            <data-table :value="trucks" :loading="loading">

                <template #header>
                    <div class="flex flex-wrap items-center justify-between gap-2">
                        <div class="grid-cols-6">
                            <span class="text-xl font-bold">Furgoni</span>
                        </div>
                        <div class="grid-cols-6">
                            <router-link to="/truck/new">
                                <Button icon="pi pi-plus" raised severity="info" class="mx-2" label="Nuovo Furgone"/>
                            </router-link>
                            <Button @click="popolateTable" icon="pi pi-refresh" raised severity="help" class="mx-2"
                                    label="Ricarica"/>
                        </div>
                    </div>
                </template>

                <column field="vehicle_name" header="Nome Veicolo"/>
                <column field="license_plate" header="Targa"/>
                <column field="width" header="Larghezza"/>
                <column field="depth" header="Profondit&aacute;"/>
                <column header="&nbsp;" style="width: 15%">
                    <template #body="slotProps">
                        <router-link :to=" '/truck/edit/' + slotProps.data.id ">
                            <Button icon="pi pi-file-edit" title="Modifica" severity="secondary" class="mx-5 my-2"/>
                        </router-link>
                        <Button icon="pi pi-trash" title="Elimina" severity="warn" class="mx-5"
                                @click="deleteTruck(slotProps.data.id)"/>
                    </template>
                </column>
            </data-table>
        </div>
    </div>
    <ConfirmDialog></ConfirmDialog>
</template>
