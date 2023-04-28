<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-6 col-md-4 col-lg-3" v-for="car in cars" :key="car.id">
                <div class="card m-3 car-container">
                    <div class="card-body" style="flex: 2; padding: 1rem">
                        <h5 class="card-title">{{ car.make }} {{ car.model }}</h5>
                        <p class="card-text">{{ car.reg_number }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { collection, getDocs } from "firebase/firestore"
    import { onMounted } from "vue";
    import { db } from "../firebase";

    export default {
        name: 'CarList',
        data() {
            return {
                cars: []
            }
        }
    }

    onMounted(() => {
        console.log('mounted')
    })

    const querySnapshot = await getDocs(collection(db, "cities"));
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        });


</script>

<style scoped>
.car-container {
    background-color: #F7F7F7; 
    min-height: 130px; 
    display: flex;
}
</style>