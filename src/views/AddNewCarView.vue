<template>
    <TopBar />
    <h1 class="header">Add new car details:</h1>
    <form @submit.prevent="addNewCar">
      <label>Make:</label>
      <input type="text" required v-model="make">

      <label>Model:</label>
      <input type="text" required v-model="model">

      <label>Registration number:</label>
      <input type="text" required v-model="registrationNumber">

      <div class="submit">
        <button type="submit">Save</button>
      </div>
    </form>
</template>

<script>
    import TopBar from '@/components/TopBar.vue'
    import { db } from "../firebase";
    import { collection, addDoc } from "firebase/firestore";

    export default {
        name: 'AddNewCarView',
        components: {
            TopBar
        },
        data() {
            return {
                make: '',
                password: '',
                registrationNumber: ''
            }
        },
        methods: {
            async addNewCar() {
                console.log('tryingToAddNewCar')
                try {
                    const docRef = addDoc(collection(db, "cars"), {
                        make: this.make,
                        model: this.model,
                        reg_number: this.registrationNumber
                    });
                    console.log("Document written with ID: ", docRef.id);
                    this.$router.push({ name: 'home' })
                } catch (e) {
                    console.error("Error adding document: ", e);
                }

            }
        }
    }
</script>

<style scoped>
.header {
  text-align: center;
  margin-top: 20px;
  font-weight: 600;
}
form {
  max-width: 420px;
  margin: 10px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  display: inline-block;
  margin: 20px 0 15px;
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin: 20px 20px 0px 20px;
  color: white;
  border-radius: 20px;
}
.submit {
  text-align: center;
}
</style>