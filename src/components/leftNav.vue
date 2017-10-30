<template>
  <div class="nava">
    <nav class="navbar navbar-vertical-left">
      <ul class="nav navbar-nav">
        <li>
          <router-link :to="{name:'person'}">
            <Icon type="person"></Icon>
            <span>Chenxx</span>
          </router-link>

        </li>
        <li>
          <router-link :to="{name:'resume'}">
            <Icon type="map"></Icon>
            <span>Resume</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'phone'}">
            <Icon type="android-call"></Icon>
            <span>Phone</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'email'}">
            <Icon type="email"></Icon>
            <span>Email</span>
          </router-link>
        </li>
        </li>
      </ul>
    </nav>
  </div>
</template>
<style>
  @import'../assets/css/bootstrap-vertical-menu.css';
  @import'../assets/css/default.css';
  .router-link-active.router-link-exact-active i {
    color: #4f98fb;
  }
  

</style>
<script>
  export default {

  }

</script>
</script>
