<template>
  <div id="app">
    <Header />
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'app',
  components: {
    Header,
  }
}
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.content {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
