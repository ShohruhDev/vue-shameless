<template>
<div class="home">
<div class="header">
<Header/>
</div>
<h1 class="home-about-title">About <span class="home-title-active">Shameless</span></h1>
<div class="home-about">
  <img src="../assets/shameless-about.jpg" alt="" class="home-about-img">
  <p class="home-about-text">Shameless (US) is an American comedy-drama series adapted by John Wells based upon the British series of the same name.
Shameless airs on Showtime at 9/8c. This remake of the award-winning British series is set in Chicago's Canaryville neighborhood on the South Side, although filmed in Los Angeles, with the exterior scenes filmed in Chicago.The series depicts the dysfunctional family of the Gallaghers who live in the South Side of Chicago. The show stars Frank Gallagher, a single father of six children. While he spends his days drunk, his six kids learn to take care of themselves through their lives.</p>
</div>
<div class="btn-wrapper">
<button class="home-about-btn"><router-link class="btn-link" to="/about">More</router-link></button></div>
<div class="home-trailer">
home-trailer
</div>
<h1>Stars</h1>
<div class="home-stars">
  <div class="card-wrapper">
    <img class="card-img" src="https://i.pinimg.com/originals/71/4e/66/714e66b55e2f15c2563246cd8a12c820.jpg" alt="">
    <span class="card-name">Carl</span>
  </div>
  <div class="card-wrapper">
    <img class="card-img" src="https://i.pinimg.com/originals/71/4e/66/714e66b55e2f15c2563246cd8a12c820.jpg" alt="">
    <span class="card-name">Carl</span>
  </div>
   <div class="card-wrapper">
    <img class="card-img" src="https://i.pinimg.com/originals/71/4e/66/714e66b55e2f15c2563246cd8a12c820.jpg" alt="">
    <span class="card-name">Carl</span>
  </div>
   <div class="card-wrapper">
    <img class="card-img" src="https://i.pinimg.com/originals/71/4e/66/714e66b55e2f15c2563246cd8a12c820.jpg" alt="">
    <span class="card-name">Carl</span>
  </div>
   <div class="card-wrapper">
    <img class="card-img" src="https://i.pinimg.com/originals/71/4e/66/714e66b55e2f15c2563246cd8a12c820.jpg" alt="">
    <span class="card-name">Carl</span>
  </div>
   <div class="card-wrapper">
    <img class="card-img" src="https://i.pinimg.com/originals/71/4e/66/714e66b55e2f15c2563246cd8a12c820.jpg" alt="">
    <span class="card-name">Carl</span>
  </div>
   
</div>
<div class="btn-wrapper">
<button class="home-about-btn"><router-link class="btn-link" to="/stars">More</router-link></button>
</div>

<Footer/>
</div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
  name: 'HomeView',
  components: {
    Header,
    Footer,
}
}
</script>
<style scoped>
.header {
   background-image: url("../assets/shameless-3.jpg");
    background-size: cover;
    background-position: center;
    height: 100vh;
}
.home {
}
.home-about {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 100px 50px 100px;
}
.home-about-img {
box-shadow: rgba(240, 46, 46, 0.4) -5px 5px, rgba(153, 10, 10, 0.3) -10px 10px, rgba(240, 46, 46, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 46, 0.05) -25px 25px;
height: 500px;
  width: 450px;
}
.home-about-text {
  max-width: 500px;
  color:#fff;
  font-size: 25px;
  font-weight: 400;
}
h1,.home-about-title{
  font-size: 60px;
  text-align: center;
  color: #fff;
  margin: 60px 0 30px 0;
}
.home-title-active{
  color:red;
}
a {
  text-decoration: none;
  color: #000;
}
.home-about-btn{
  background-color: #505254;
  padding: 8px;
  border: none;
  border-radius: 3px;
}

.btn-wrapper{
 display: flex;
  justify-content: center;
  margin-top: -40px;
  margin-bottom: 20px;

}
.btn-link {
  background-color: #505254;
  color: #fff;
}

.home-stars {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;

}
.card-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  border: 1px solid #fff;
}
.card-img {
  width: 250px;
}
.card-name {
  font-size: 25px;
  color:#fff ;
  text-align: center;
  background-color: #505254;
  width: 100%;
}

</style>