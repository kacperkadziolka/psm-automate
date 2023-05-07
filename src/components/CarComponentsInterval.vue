<template>
    <div v-if="car_maitenance">
        <div class="car-data">

            <div class="maintenance-item">
                <span>Brake pads:</span>
                <span>{{ brakePadsDate }}</span>
                <div :class="['color-box', brakePadsBoxColor]"></div>
            </div>

            <div class="maintenance-item">
                <span>Motor oil:</span>
                <span>{{ motorOilDate }}</span>
                <div :class="['color-box', motorOilBoxColor]"></div>
            </div>

            <div class="maintenance-item">
                <span>Coolant fluid:</span>
                <span>{{ coolantFluidDate }}</span>
                <div :class="['color-box', coolantFluidBoxColor]"></div>
            </div>

            <div class="maintenance-item">
                <span>Overall maitenance:</span>
                <span>{{ OverallConditionDate }}</span>
                <div :class="['color-box', OverallConditionBoxColor]"></div>
            </div>

        </div>
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
                if (this.car_maitenance && this.car_maitenance.brake_pads) {
                    return this.formatDate(this.car_maitenance.brake_pads);
                }
                else {
                    return '';
                }
            },
            brakePadsBoxColor() {
                if (this.car_maitenance && this.car_maitenance.brake_pads) {
                    return this.getBoxColor(this.car_maitenance.brake_pads);
                } else {
                    return '';
                }
            },
            motorOilDate() {
                if (this.car_maitenance && this.car_maitenance.motor_oil) {
                    return this.formatDate(this.car_maitenance.motor_oil);
                }
                else {
                    return '';
                }
            },
            motorOilBoxColor() {
                if (this.car_maitenance && this.car_maitenance.motor_oil) {
                    return this.getBoxColor(this.car_maitenance.motor_oil);
                } else {
                    return '';
                }
            },
            coolantFluidDate() {
                if (this.car_maitenance && this.car_maitenance.coolant_fluid) {
                    return this.formatDate(this.car_maitenance.coolant_fluid);
                }
                else {
                    return '';
                }
            },
            coolantFluidBoxColor() {
                if (this.car_maitenance && this.car_maitenance.coolant_fluid) {
                    return this.getBoxColor(this.car_maitenance.coolant_fluid);
                } else {
                    return '';
                }
            },
            OverallConditionDate() {
                if (this.car_maitenance && this.car_maitenance.overall_condition) {
                    return this.formatDate(this.car_maitenance.overall_condition);
                }
                else {
                    return '';
                }
            },
            OverallConditionBoxColor() {
                if (this.car_maitenance && this.car_maitenance.overall_condition) {
                    return this.getBoxColor(this.car_maitenance.overall_condition);
                } else {
                    return '';
                }
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
        }
    };

</script>

<style>
.car-data {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 16px;
}
.maintenance-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    margin-bottom: 20px;
}
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
</style>