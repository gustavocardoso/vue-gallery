<template>
  <div id="app">
    <header class="header">
      <img src="./assets/logo.png" class="logo">
      <h1><router-link to="/" class="title">{{ title }}</router-link></h1>
      
      <nav>
        <router-link to="/ghost" class="nav-item">Ghost</router-link>
        <router-link to="/queens" class="nav-item">Queens of the Stone Age</router-link>
        <router-link to="/sabbath" class="nav-item">Black Sabbath</router-link>
      </nav>
    </header>

    <main class="content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'app',

    data() {
      return {
        title: 'Vue Gallery'
      }
    },

    components: {
    }
  }
</script>

<style>
  body {
    font: normal normal 16px/1.5 sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #C6C5B9;
  }

  #app {
    text-align: center;
    color: #2c3e50;
    padding: 1em;
  }

  h1 {
    margin: 0;
  }

  .title {
    display: inline-block;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 1.6em;
    font-weight: normal;
    letter-spacing: -.1em;
    text-decoration: none;
    color: #393D3F;
    margin: 0 0 .6em 0;
  }

  .logo {
    width: 50px;
  }

  .nav-item {
    display: inline-block;
    font-size: 1em;
    font-weight: bold;
    text-decoration: none;
    color: #FDFDFF;
    background: #393D3F;
    border-radius: 1em 1em 0 0;
    margin: 0 .6em;
    padding: 1em;
  }

  .nav-item:hover {
    color: #393D3F;
    background: #FDFDFF;
  }

  .nav-item.router-link-active {
    color: #393D3F;
    background: #FDFDFF;
  }

  nav {
    margin-bottom: 0;
  }

  .content {
    background: #FDFDFF;
    border-radius: 1em;
    padding: 1em 2em;
  }

  .page-subtitle {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 2em;
    color: #546A7B;
    margin: 0;
  }

  .images {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2em 1em;
  }

  .images img {
    width: 20%;
    height: 100%;
    border: 5px solid #C6C5B9;
    border-radius: 1em;
  }
</style>
