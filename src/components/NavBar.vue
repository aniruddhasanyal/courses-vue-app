<template>
    <div class="nav stick-nav">
        <router-link :to="{ name: 'Home' }">
          <i class="fa fa-fw fa-home"></i><span> Home</span>
        </router-link>
        <router-link :to="{ name: 'Courses' }">
          <i class="fa fa-leanpub" aria-hidden="true"></i><span> Courses</span>
        </router-link>
        <router-link :to="{ name: 'About' }">
          <i class="fa fa-info-circle" aria-hidden="true"></i><span> About</span>
        </router-link>
        <a href="#" class="login">
          <i class="fa fa-user" aria-hidden="true"></i><span> Login</span>
        </a>
    </div>
</template>


<style>
* {
  margin: 0px;
  padding: 0px;
}

.nav {
  background-color: #555;
  overflow: auto;
  vertical-align: middle;
  width: 100%;
}

.nav a {
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.nav a:not(.login) {
  float: left;
}

.nav a:hover {
  background-color: #000;
}

.nav a.router-link-exact-active {
  background-color: #04AA6D;
  color: white;
}

.login {
  float: right;
}
</style>