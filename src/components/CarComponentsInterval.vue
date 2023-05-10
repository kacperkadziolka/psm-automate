<template>
    <div v-if="car_maitenance">
        <div class="car-data">
            
            <div class="maintenance-item">
                <div class="maitenance-part">
                    <span>Motor oil and filters:</span>
                </div>
                <div class="maitenance-date">
                    <span>{{ motorOilDate }}</span>
                    <div :class="['color-box', motorOilBoxColor]"></div>
                </div>
            </div>

            <div class="maintenance-item">
                <div class="maitenance-part">
                    <span>Coolant fluid:</span>
                </div>
                <div class="maitenance-date">
                    <span>{{ coolantFluidDate }}</span>
                    <div :class="['color-box', coolantFluidBoxColor]"></div>
                </div>
            </div>

            <div class="maintenance-item">
                <div class="maitenance-part">
                    <span>Braking system:</span>
                </div>
                <div class="maitenance-date">
                    <span>{{ brakePadsDate }}</span>
                    <div :class="['color-box', brakePadsBoxColor]"></div>
                </div>
            </div>

            <div class="maintenance-item">
                <div class="maitenance-part">
                    <span>Overall maitenance:</span>
                </div>
                <div class="maitenance-date">
                    <span>{{ OverallConditionDate }}</span>
                    <div :class="['color-box', OverallConditionBoxColor]"></div>
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
                car_maitenance: null
            }
        },
        created() {
            const unsubscribe = onMounted(async () => {
                const querySnapshot = await getDocs(collection(db, "maitenance"));
                querySnapshot.forEach((doc) => {
                    const carData = doc.data();
                    if (carData.reg_number === this.reg_number) {
                        this.car_maitenance = carData;
                    }
                });
            })
        },
        computed: {
            
            brakePadsDate() {
                if (this.car_maitenance && this.car_maitenance.brake_pads) return this.formatDate(this.car_maitenance.brake_pads);
            },
            brakePadsBoxColor() {
                if (this.car_maitenance && this.car_maitenance.brake_pads) return this.getBoxColor(this.car_maitenance.brake_pads);
            },
            motorOilDate() {
                if (this.car_maitenance && this.car_maitenance.motor_oil) return this.formatDate(this.car_maitenance.motor_oil)
            },
            motorOilBoxColor() {
                if (this.car_maitenance && this.car_maitenance.motor_oil) return this.getBoxColor(this.car_maitenance.motor_oil);
            },
            coolantFluidDate() {
                if (this.car_maitenance && this.car_maitenance.coolant_fluid) return this.formatDate(this.car_maitenance.coolant_fluid);
            },
            coolantFluidBoxColor() {
                if (this.car_maitenance && this.car_maitenance.coolant_fluid) return this.getBoxColor(this.car_maitenance.coolant_fluid);
            },
            OverallConditionDate() {
                if (this.car_maitenance && this.car_maitenance.overall_condition) return this.formatDate(this.car_maitenance.overall_condition);
            },
            OverallConditionBoxColor() {
                if (this.car_maitenance && this.car_maitenance.overall_condition) return this.getBoxColor(this.car_maitenance.overall_condition);
            }
        },
        methods: {
            formatDate(timestamp) {
                const date = timestamp.toDate();
                const options = { year: "numeric", month: "short", day: "numeric" };
                const dateString = date.toLocaleDateString("en-US", options)
                return dateString.toUpperCase()
            },
            getBoxColor(timestamp) {
                const date = timestamp.toDate();
                const currentDate = new Date();
                const timeDiff = date.getTime() - currentDate.getTime();
                const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
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
.maitenance-date {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;
    font-size: 20px;
}
.maitenance-part {
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