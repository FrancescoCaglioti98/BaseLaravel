<template>
    <div class="p-4">
        <Panel header="Seleziona un camion e inserisci i pallet" toggleable>
            <Select v-model="selectedTruck" :options="trucks" optionLabel="vehicle_name"
                    placeholder="Seleziona un camion"
                    checkmark
                    class="w-full mb-3">
                <template #value="slotProps">
                    <span v-if="slotProps.value">
                        {{ slotProps.value.vehicle_name }} ({{slotProps.value.width}}cm x {{slotProps.value.depth}}cm)
                    </span>
                    <span v-else>
                        Seleziona un camion
                    </span>
                </template>
                <template #option="slotProps">
                    <div class="flex items-center">
                        <div>{{ slotProps.option.vehicle_name }} ({{slotProps.option.width}}cm x {{slotProps.option.depth}}cm)</div>
                    </div>
                </template>
            </Select>
            <div v-for="(pallet, index) in pallets" :key="index" class="flex gap-2 mb-3 items-center">
                <InputNumber v-model="pallet.width" placeholder="Larghezza (cm)" class="w-1/4"/>
                <InputNumber v-model="pallet.depth" placeholder="Profondit&aacute; (cm)" class="w-1/4"/>
                <InputNumber v-model="pallet.quantity" placeholder="Quantità" class="w-1/4"/>
                <Button icon="pi pi-trash" class="p-button-danger p-button-text" @click="removePallet(index)"/>
            </div>
            <Button label="Aggiungi Pallet" @click="addPallet" class="w-full mb-3"/>
            <Button label="Calcola Posizionamento" @click="calculatePlacement" class="w-full"/>
        </Panel>

        <div v-if="palletPositions.length" class="mt-4">
            <h3>Posizionamento pallet:</h3>
            <div class="grid-container"
                 :style="{ width: selectedTruck.width + 'px', height: selectedTruck.depth + 'px', transform: 'scale(0.6)' }">
                <div v-for="(pallet, index) in palletPositions" :key="index" class="pallet"
                     :style="{ left: pallet.x + 'px', top: pallet.y + 'px', width: pallet.width + 'px', height: pallet.depth + 'px' }">
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import internalApiClient from "../../api/internalApiClient.js";

export default {
    data() {
        return {
            trucks: [],
            selectedTruck: null,
            pallets: [
                {width: 80, depth: 120, quantity: 5},
                {width: 100, depth: 150, quantity: 2}
            ],
            palletPositions: []
        };
    },
    created() {
        this.getTrucks();
    },
    methods: {
        addPallet() {
            this.pallets.push({width: 80, depth: 120, quantity: 1});
        },
        removePallet(index) {
            this.pallets.splice(index, 1);
        },
        calculatePlacement() {
            if (!this.selectedTruck) {
                this.$toast.add({severity: 'error', summary: 'Errore', detail: 'Seleziona un camion', life: 3000});
                return;
            }

            const truckWidth = this.selectedTruck.width;
            const truckDepth = this.selectedTruck.depth;
            const positions = [];
            let occupiedSpaces = [];

            for (const pallet of this.pallets) {
                for (let i = 0; i < pallet.quantity; i++) {
                    let placed = false;
                    let possibleOrientations = [
                        {width: pallet.width, depth: pallet.depth},
                        {width: pallet.depth, depth: pallet.width}
                    ];

                    for (const orientation of possibleOrientations) {
                        for (let y = 0; y + orientation.depth <= truckDepth; y += 10) {
                            for (let x = 0; x + orientation.width <= truckWidth; x += 10) {
                                if (!occupiedSpaces.some(space =>
                                    x < space.x + space.width &&
                                    x + orientation.width > space.x &&
                                    y < space.y + space.depth &&
                                    y + orientation.depth > space.y)) {

                                    positions.push({x, y, width: orientation.width, depth: orientation.depth});
                                    occupiedSpaces.push({x, y, width: orientation.width, depth: orientation.depth});
                                    placed = true;
                                    break;
                                }
                            }
                            if (placed) break;
                        }
                        if (placed) break;
                    }

                    if (!placed) {
                        this.$toast.add({
                            severity: 'warn',
                            summary: 'Attenzione',
                            detail: 'Alcuni pallet non entrano nel camion!',
                            life: 3000
                        });
                        break;
                    }
                }
            }

            this.palletPositions = positions;
        },
        getTrucks() {
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
        }
    }
};
</script>

<style>
.grid-container {
    position: relative;
    border: 1px solid #ccc;
    background: #f9f9f9;
    margin: auto;
    overflow: hidden;
}

.pallet {
    position: absolute;
    background: #4caf50;
    border: 1px solid #fff;
}
</style>
