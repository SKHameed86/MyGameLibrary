<template>
<div id='app'>
  <div id='sony-bar' class='sony-bar'><span class='sony-logo sony-logo-space' /></div>
  <nav class='navbar navbar-expand navbar-white bg-white'>
      <router-link to='/' class='navbar-brand'><img class='ps-logo' src='./assets/logo_ps-v2.png' /></router-link>
      <div class='navbar-nav mr-auto'>
        <li class='nav-item'>
          <router-link to='/games' class='nav-link'>View Games</router-link>
        </li>
        <li class='nav-item'>
          <router-link to='/add' class='nav-link'>Add Game</router-link>
        </li>
      </div>
    </nav>
    <div class='container mt-3'>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

a.navbar-brand {
  width: 50px;
}

div.sony-bar {
  background-color: black;
  height: 30px;
}

span.sony-logo {
  background-image: url(./assets/logo_sony-v2.jpeg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  width: 100%;
  height: 100%;
  display: inline-block;
  float: right;
}

span.sony-logo-space {
  width: 75px;
  margin: 0 8px;
}

img.ps-logo {
  width: 100%;
  float: left;
}
</style>
