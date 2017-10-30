<template>
<div class="row">
<leftNav></leftNav>
<div class="right">
  	<router-view></router-view>    
</div>
</div>
    
</template>
<script>
import leftNav from'./leftNav'
    export default {
    components: {
      leftNav
    }
    }
</script>
<style>
.row{
    width: 100%;
    max-width: 860px;
    position: relative;
    padding-bottom: 15px;
    margin: auto;
    height: 100%;;
    padding-bottom: 15px;
    background:#ade691;
background:-webkit-linear-gradient(left,#096e5d,#329e8c 30%,#88cfc3);
    overflow: hidden
}
.right{
    width:700px;
    padding-left: 160px;
}
@media(max-width: 768px) {
  .right {
    width: 100%;
    padding-left: 0;
  }
  }
</style>
