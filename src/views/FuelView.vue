<template>

  <div class="div-container">
    <TopBar />
  </div>
  
  <div class="container my-4">
    <h1 class="text-center mb-4">Fuel Consumption Calculator</h1>
    <form>
      <div class="mb-3">
        <label for="distanceDriven" class="form-label">Distance Driven (km)</label>
        <input type="number" class="form-control" id="distanceDriven" v-model.number="distanceDriven" required>
      </div>
      <div class="mb-3">
        <label for="fuelConsumed" class="form-label">Fuel Consumed (litres)</label>
        <input type="number" class="form-control" id="fuelConsumed" v-model.number="fuelConsumed" required>
      </div>
      <div class="mb-3">
        <label for="fuelPrice" class="form-label">Price of Fuel (PLN/litre)</label>
        <input type="number" class="form-control" id="fuelPrice" v-model.number="fuelPrice" required>
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="calculateFuelUsage">Calculate</button>
    </form>
    <div v-if="averageFuelUsage">
      <hr>
      <h3>Average Fuel Usage:</h3>
      <p>{{ averageFuelUsage }} litres/100km</p>
      <hr>
      <h3>Average Fuel Cost:</h3>
      <p>{{ averageFuelCost }} PLN/100km</p>
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
export default {
  name: 'FuelConsumptionCalculator',
  components: {
    TopBar
  },
  data() {
    return {
      distanceDriven: null,
      fuelConsumed: null,
      fuelPrice: null,
      averageFuelUsage: null,
      averageFuelCost: null
    };
  },
  methods: {
    calculateFuelUsage() {
      // Calculate the average fuel usage in litres per 100 km round to 2nd place after coma 
      this.averageFuelUsage = ((this.fuelConsumed / this.distanceDriven) * 100).toFixed(2);

      // Calculate the average fuel cost in PLN per 100 km round to 2nd place after coma 
      this.averageFuelCost = ((this.fuelPrice * this.fuelConsumed) / this.distanceDriven * 100).toFixed(2);

      // Clear input fields
      this.distanceDriven = null;
      this.fuelConsumed = null;
      this.fuelPrice = null;
    }
  }
};
</script>