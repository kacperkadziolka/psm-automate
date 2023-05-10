<template>
    <TopBar />

    <div class="container">
        <h1 class="header mt-4 mb-3">Fill the maintenance intervals:</h1>
        <form @submit.prevent="addMaitenanceData">
            <div class="form-group">
                <label>Motor oil and filters:</label>
                <input type="date" class="form-control" v-model="motorOilDate" required>
            </div>

            <div class="form-group">
                <label>Coolant fluid:</label>
                <input type="date" class="form-control" v-model="coolantFluidDate" required>
            </div>

            <div class="form-group">
                <label>Braking system:</label>
                <input type="date" class="form-control" v-model="brakePadsDate" required>
            </div>

            <div class="form-group">
                <label>Overal maitenance:</label>
                <input type="date" class="form-control" v-model="overallConditionDate" required>
            </div>

            <button v-if="!hasMaintenanceData" type="submit" class="btn btn-primary mt-3">Add maitenance data</button>
            <button v-else type="submit" class="btn btn-success mt-3">Update maitenance data</button>
        </form>

        <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>

    </div>

</template>

<script>
    import TopBar from '@/components/TopBar.vue'
    import { db } from "../firebase";
    import { collection, addDoc, query, where, getDocs, updateDoc } from "firebase/firestore";

    export default {
        name: 'MaitenanceDataView',
        components: {
            TopBar
        },
        props: {
            reg_number: String
        },
        data() {
            return {
                motorOilDate: '',
                coolantFluidDate: '', 
                brakePadsDate: '',
                overallConditionDate: '',
                hasMaintenanceData: false,
                errorMessage: null
            }
        },
        async created() {
                const maintenanceQuery = query(collection(db, "maitenance"), where("reg_number", "==", this.reg_number));
                const querySnapshot = await getDocs(maintenanceQuery);
                this.hasMaintenanceData = querySnapshot.size > 0;
            },
        methods: {
            async addMaitenanceData() {
                const maintenanceQuery = query(collection(db, "maitenance"), where("reg_number", "==", this.reg_number));
                const querySnapshot = await getDocs(maintenanceQuery);
                const maintenanceDocs = querySnapshot.docs;

                if (maintenanceDocs.length > 0) {
                    try {
                        // Update existing document
                        const maintenanceDoc = maintenanceDocs[0];
                        await updateDoc(maintenanceDoc.ref, {
                            motor_oil: new Date(this.motorOilDate),
                            coolant_fluid: new Date(this.coolantFluidDate),
                            brake_pads: new Date(this.brakePadsDate),
                            overall_condition: new Date(this.overallConditionDate)
                        });
                        this.$router.push({ name: 'CarDetailsView', params: { reg_number: this.reg_number } })
                    } 
                    catch (e) {
                        console.error("Error updating document: ", e);
                        this.errorMessage = "An error occurred while updating maintenance data.";
                    }
                } 
                else {
                    try {
                        // Add new document
                        await addDoc(collection(db, "maitenance"), {
                            reg_number: this.reg_number,
                            motor_oil: new Date(this.motorOilDate),
                            coolant_fluid: new Date(this.coolantFluidDate),
                            brake_pads: new Date(this.brakePadsDate),
                            overall_condition: new Date(this.overallConditionDate)
                        });
                        this.$router.push({ name: 'CarDetailsView', params: { reg_number: this.reg_number } })
                    } catch (e) {
                        console.error("Error adding document: ", e);
                        this.errorMessage = "An error occurred while adding maintenance data.";
                    }
                }
            }
        }
    }
</script>

<style scoped>
.container {
    max-width: 600px;
    margin: 0 auto;
}
.header {
    font-size: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
}
.form-group {
    margin-bottom: 30px;
}
label {
    font-weight: bold;
}
input[type="date"] {
    height: 2.75rem;
    border-radius: 0.5rem;
    border-color: #ced4da;
}
</style>