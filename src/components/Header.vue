<template>
  <header>
    <div class="header-wrapper">
      <h1>책벌레</h1>
      <Navigation />
    </div>
  </header>
</template>

<script>
import Navigation from './Navigation';

export default {
  name: 'Header',
  components: {
    Navigation,
  }
}
</script>

<style scoped>
header {
  background: #2c3e50;
  color: white;
}

.header-wrapper {
  max-width: 768px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

h1 {
  margin: 0;
  padding: 1rem;
}
</style>