<template>
  <nav>
    <RouterLink exact to="/" active-class="active">책 검색</RouterLink>
    <RouterLink exact to="/bookshelf" active-class="active">내 서재</RouterLink>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
}
</script>

<style>
nav {
  display: flex;
}

a {
  color: white;
  font-weight: bold;
  text-decoration: none;
  padding: 1rem;
  display: flex;
  align-items: center;
}

a:hover {
  background-color: white;
  color: #2c3e50;
  transition: 0.25s;
}

.active {
  text-decoration: underline;
}
</style>