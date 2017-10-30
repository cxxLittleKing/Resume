<template>
    <div class="person">
        <h3>Person Photo</h3>
        <img src="../assets/images/person.jpg" alt="">
        <p>Hello! My name is chenxx!</p>
         <router-link  :to="{name:'email'}" >
        <button  class="btn btn-lg btn-primary btn-block" type="button">Send mail to me </button>
    </router-link>
    </div>
</template>
<style>
.person{
    margin: auto;
    text-align: center;
}
 img{
    max-width: 250px;
    margin:10px 0 10px 0;
    text-align: center;
    padding:10px;border:1px solid #000;
    -moz-box-shadow:3px 3px 4px #000;
    webkit-box-shadow:3px 3px 4px #000;
    box-shadow:3px 3px 4px #000;background:#fff;
    filter:progid:DXImageTransform.Microsoft.Shadow(Strength=4,Direction=135,Color='#000000');
    
}
.right{
    margin: auto;
}
button{
    max-width: 250px;
    margin: 0 auto;
    margin-top:20px;
}
@media(max-width: 768px) {
  .person {
        
  }
  img{
      display: block;
      margin: 10px auto;
  }
  }
</style>
