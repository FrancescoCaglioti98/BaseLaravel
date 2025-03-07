<script>
import internalApiClient from "../../../api/internalApiClient.js";
import TruckForm from "../../../components/Truck/TruckForm.vue";

export default {
    components: {TruckForm},
    data(){
        return {
            newTruckInfo: {
                vehicle_name: '',
                license_plate: '',
                depth: '',
                width: ''
            },
            newTruckInfoInvalid: {
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
        onFormSubmit() {
            internalApiClient.post( "/trucks",this.newTruckInfo)
                .then( response => {
                    if( response.status === 201 ) {
                        this.$toast.add({ severity: 'success', summary: 'Salvato', detail: 'Nuovo Furgone Salvato', life: 3000 });
                    }

                })
                .catch( errors => {
                    if( errors.response.status === 422 ) {
                        let errorResponse = errors.response.data.errors;
                        Object.keys(errorResponse).forEach((key) => {
                            if (this.newTruckInfoInvalid.hasOwnProperty(key)) {
                                this.newTruckInfoInvalid[key] = true;
                                this.newTruckInfoInvalid[`${key}_message`] = errorResponse[key][0];
                            }
                        });
                    }

                });
        }
    }

}
</script>

<template>
    <TruckForm
        :form-data="newTruckInfo"
        :form-error-data="newTruckInfoInvalid"
        @submit="onFormSubmit"
    />
</template>
