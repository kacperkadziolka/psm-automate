<template>
    <div v-if="car_maitenance">
        <div class="car-data">

            <div v-for="(item, index) in maintenanceItems" :key="index" class="maintenance-item">
                <div class="maintenance-part">
                    <span>{{ item.label }}:</span>
                </div>
                <div class="maintenance-date">
                    <span>{{ formatDate(getMaintenanceDate(item.key)) }}</span>
                    <div :class="['color-box', getBoxColor(getMaintenanceDate(item.key))]"></div>
                </div>
            </div>

        </div>
    </div>

    <div class="button-wrapper">
        <button v-if="car_maitenance" class="update-button" @click="openMaitenanceForm(this.reg_number)">Update Maintenance Data</button>
        <button v-else class="add-button" @click="openMaitenanceForm(this.reg_number)">Add Maintenance Data</button>
    </div>
</template>

<script>
    import { onMounted } from "vue";
    import { collection, getDocs } from "firebase/firestore";
    import { db } from "../firebase";

    export default {
        name: 'CarComponentsInterval',
        props: {
            reg_number: String
        },
        data() {
            return {
                car_maitenance: null,
                maintenanceItems: [
                    { label: "Motor oil and filters", key: "motor_oil" },
                    { label: "Coolant fluid", key: "coolant_fluid" },
                    { label: "Braking system", key: "brake_pads" },
                    { label: "Overall condition", key: "overall_condition" }
                ]
            }
        },
        created() {
            onMounted(async () => {
                const querySnapshot = await getDocs(collection(db, "maitenance"));
                querySnapshot.forEach((doc) => {
                    const carData = doc.data();
                    if (carData.reg_number === this.reg_number) {
                        this.car_maitenance = carData;
                    }
                });
            })
        },
        methods: {
            getMaintenanceDate(key) {
                if (this.car_maitenance && this.car_maitenance[key]) return this.car_maitenance[key];
            },
            formatDate(timestamp) {
                // Converts timestamp from db to date
                const date = timestamp.toDate();

                // Specifices date format
                const options = { year: "numeric", month: "short", day: "numeric" };

                // Converts date to string
                const dateString = date.toLocaleDateString("en-US", options)
                return dateString.toUpperCase()
            },
            getBoxColor(timestamp) {
                // Converts timestamp from db to date
                const date = timestamp.toDate();

                // Gets current date
                const currentDate = new Date();

                // Calculates time difference between timestamp from db and current date (in milliseconds)
                const timeDiff = date.getTime() - currentDate.getTime();

                // Converts time difference to days - 1000 milliseconds per second * 3600 seconds per hour * 24 hours per day
                const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

                // This determine the color of the box displayed next to the date
                if (dayDiff <= 0) {
                    return "red";
                } else if (dayDiff <= 7) {
                    return "orange";
                } else {
                    return "green";
                }
            },
            openMaitenanceForm() {
                this.$router.push({ name: "EditCarView", params: { reg_number: this.reg_number } });
            }
        }
    };
</script>

<style scoped>
.car-data {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 16px;
}
.maintenance-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    margin-bottom: 20px;
    background-color: #f1f1f1;
    padding: 10px;
    border-radius: 10px;
    width: 300px;
}
.maintenance-date {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;
    font-size: 20px;
}
.maintenance-part {
    font-size: 24px;
    font-weight: 600;
    align-items: center;
}

/* Styles for colour boxes */
.color-box {
  width: 80px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: white;
  margin-left: 10px;
}
.red {
  background-color: #ff4444;
}
.green {
  background-color: #00c851;
}
.orange {
  background-color: #ffbb33;
}

/* Styles for buttons */
.button-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.update-button,
.add-button {
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  color: #fff;
}
.update-button {
  background-color: #4caf50;
}
.add-button {
  background-color: #2196f3;
}
</style>