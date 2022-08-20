<template>
<div class="header">
<Header/>
</div>
<Footer/>
  <div>ABOUT</div>
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

<style scoped>
.header {
      background-image: url("../assets/shameless.jpg");
    background-size: cover;
    background-position: center;
    height: 100vh;
}
</style>>
