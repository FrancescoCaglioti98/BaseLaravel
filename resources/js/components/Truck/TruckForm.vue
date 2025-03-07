<script>
export default {
    name: "TruckForm",
    props: {
        formData: Object,
        formErrorData: Object,
    },
}
</script>

<template>
    <Form>
        <div class="space-y-12">
            <div class="border-b border-gray-900/10 pb-12">
                <h2 class="text-base/7 font-semibold text-gray-900">Nuovo Furgone</h2>

                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                    <div class="sm:col-span-3">
                        <FloatLabel variant="on">
                            <InputText v-model="formData.vehicle_name" type="text" id="vehicle_name" fluid
                                       variant="filled" required/>
                            <label for="vehicle_name">Nome Veicolo</label>
                        </FloatLabel>
                        <Message v-if="formErrorData.vehicle_name" severity="error" size="small" variant="simple">
                            {{ formErrorData.vehicle_name_message }}
                        </Message>
                    </div>

                    <div class="sm:col-span-3">
                        <FloatLabel variant="on">
                            <InputText v-model="formData.license_plate" type="text" id="license_plate" fluid
                                       variant="filled" required/>
                            <label for="license_plate">Targa Veicolo</label>
                        </FloatLabel>
                        <Message v-if="formErrorData.license_plate" severity="error" size="small"
                                 variant="simple">{{ formErrorData.license_plate_message }}
                        </Message>
                    </div>

                    <div class="sm:col-span-3">
                        <FloatLabel variant="on">
                            <InputNumber v-model="formData.width" :useGrouping="false" id="width" :min="1"
                                         :max="999" fluid variant="filled" required/>
                            <label for="width">Larghezza Veicolo</label>
                        </FloatLabel>
                        <Message v-if="formErrorData.width" severity="error" size="small" variant="simple">
                            {{ formErrorData.width_message }}
                        </Message>
                    </div>

                    <div class="sm:col-span-3">
                        <FloatLabel variant="on">
                            <InputNumber v-model="formData.depth" :useGrouping="false" id="depth" :min="1"
                                         :max="999" fluid variant="filled" required/>
                            <label for="depth">Profondit&aacute; Veicolo</label>
                        </FloatLabel>
                        <Message v-if="formErrorData.depth" severity="error" size="small" variant="simple">
                            {{ formErrorData.depth_message }}
                        </Message>
                    </div>

                </div>
            </div>
        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
            <Button type="submit" severity="success" label="Salva" icon="pi pi-save"/>
        </div>
    </Form>
</template>
