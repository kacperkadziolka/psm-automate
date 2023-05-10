<template>
  <div class="div-container">

    <TopBar />

      <div class="authors-container">
        <div class="author-info">
          <h2>Kacper Kądziołka</h2>
          <p>Student ID: {{ kacperKadziolkaStudentID }}</p>
        </div>
        <div class="author-info">
          <h2>Krzysztof Anyż</h2>
          <p>Student ID: {{ krzysztofAnyzStudentID }}</p>
      </div>

    </div>
  </div>
</template>
  
<script>
  import TopBar from '@/components/TopBar.vue'
  
  export default{
    name: 'AuthorsView',
    components: {
      TopBar
    },
    data() {
      return {
        krzysztofAnyzStudentID: 's220034',
        kacperKadziolkaStudentID: 's220692'
      }
    }
  }
</script>
  
  <style scoped>
.authors-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
}
.author-info {
  text-align: center;
  margin-bottom: 20px;
}
.author-info h2 {
  font-size: 24px;
  margin-bottom: 10px;
}
.author-info p {
  font-size: 18px;
  color: #666;
}
</style>