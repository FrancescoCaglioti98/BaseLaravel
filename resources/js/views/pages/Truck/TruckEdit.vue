<script>
import internalApiClient from "../../../api/internalApiClient.js";
import TruckForm from "../../../components/Truck/TruckForm.vue";
export default {
    components: {TruckForm},
    data() {
        return {
            truckInfo: {
                id: null,
                vehicle_name: null,
                license_plate: null,
                width: null,
                depth: null,
            },
            truckInfoInvalid: {
                vehicle_name: false,
                vehicle_name_message: '',
                license_plate: false,
                license_plate_message:  '',
                depth: false,
                depth_message:  '',
                width: false,
                width_message:  '',
            },
        };
    },
    methods: {
        async getTruckInfo(){
            await internalApiClient.get("/trucks/" + this.truckInfo.id )
                .then(response => {
                    this.truckInfo.vehicle_name = response.data.data.vehicle_name;
                    this.truckInfo.license_plate = response.data.data.license_plate;
                    this.truckInfo.width = response.data.data.width;
                    this.truckInfo.depth = response.data.data.depth;
                })
                .catch(errors => {
                    this.$toast.add({
                        severity: 'error',
                        summary: 'Errore',
                        detail: 'Errore nel recupero delle informazioni',
                        life: 3000
                    });
                });
        },
        onFormSubmit() {
            internalApiClient.put( "/trucks/" + this.truckInfo.id,this.truckInfo)
                .then( response => {
                    if( response.status === 200 ) {
                        this.$toast.add({ severity: 'success', summary: 'Salvato', detail: 'Furgone correttamente aggiornato', life: 3000 });
                    }

                })
                .catch( errors => {
                    if( errors.response.status === 422 ) {
                        let errorResponse = errors.response.data.errors;
                        Object.keys(errorResponse).forEach((key) => {
                            if (this.truckInfoInvalid.hasOwnProperty(key)) {
                                this.truckInfoInvalid[key] = true;
                                this.truckInfoInvalid[`${key}_message`] = errorResponse[key][0];
                            }
                        });
                    }

                });
        }
    },
    created() {
        this.truckInfo.id = this.$route.params.id;
        this.getTruckInfo();
    }
}
</script>

<template>
    <TruckForm
        :form-data="truckInfo"
        :form-error-data="truckInfoInvalid"
        @submit="onFormSubmit"
    />
</template>
