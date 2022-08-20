<template>
  <header class="header">
    <div class="header-container">
      <h1 class="logo"><router-link class-active="active" to="/">Shameless</router-link></h1>
    <ul class="header-list">
       <li class="header-item"><router-link class-active="active" to="/about">About</router-link></li>
        <li class="header-item"><router-link  class-active="active" to="/stars">Stars</router-link></li>
    </ul>
    </div>
    <h1 class="title">the <br/> best serial</h1>
  </header>
</template>

<script>
export default {

}
</script>

<style  scoped>
a {
  text-decoration: none;
  color: red;

}
a.router-link-active {
color: #fff;
}
li {
  list-style: none;
}


.header-container{
  display: flex;
  padding-top: 15px;
  padding-left: 60px;
  justify-content: space-between;
 margin: auto;       
}

.header-list {
  display: flex;
  justify-content: space-between;
  align-self: center;
}
.header-item {
  padding-right: 60px;
  font-size: 25px;
  position: relative;
  font-weight: 700;
}

.logo {
  font-size: 40px;
  font-weight: 900;
text-shadow: 3px 0px 0px rgba(103, 105, 126, 0.81);
}
.title{
    padding-top: 150px;
    text-align: center;
    font-size: 100px;
    font-weight: 700;
    text-transform: uppercase;
    background-image: linear-gradient(
            -225deg,
            #ff1361 0%,
            #ce1818 33%,
            #ff1361 67%,
            #391a1d 100%
    );
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 2s linear infinite;
    
}
@media(max-width: 650px) {
  font-size: 20px;

}


</style>

