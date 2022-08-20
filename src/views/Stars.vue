<template>
<div class="header">
<Header/>
</div>
<Footer/>
  <div>STARS</div>
</template>



<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
components: {
  Header,
  Footer
}
}
</script>

<style>
.header {
   background-image: url("../assets/shameless-2.jpg");
    background-size: cover;
    background-position: center;
    height: 100vh;
}
</style>