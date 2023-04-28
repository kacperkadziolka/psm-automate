<template>
    <nav class="navbar navbar-light bg-light m-3">
        <button class="navbar-toggler ms-4 m-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand mx-auto title-adjust" href="#">Cars</a>
        <i type="button" class="bi bi-plus-lg mx-4 size-adjust"></i>
    </nav>
</template>
  
<script>
    export default {
        name: 'TopBar'
    }
</script>

<style scoped>
.size-adjust {
    font-size: 1.625rem;
}
.title-adjust {
    font-size: 1.5rem;
}
</style>