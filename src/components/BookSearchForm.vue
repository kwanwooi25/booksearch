<template>
  <form @submit.prevent="fetchBooks(searchTerm)">
    <input type="text" v-model="searchTerm">
    <input type="submit" value="검색">
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'BookSearchForm',

  computed: {
    searchTerm: {
      get() {
        return this.$store.getters.searchTerm;
      },
      set(value) {
        this.updateSearchTerm(value);
      },
    }
  },

  methods: {
    ...mapActions([
      'updateSearchTerm',
      'fetchBooks',
    ]),
  },
}
</script>

<style scoped>
form {
  margin: 1rem;
}

form input[type="text"],
form input[type="submit"] {
  font-size: 1.25rem;
  padding: 0.5rem;
  outline: none;
  transition: 0.15s;
}

form input[type="text"] {
  border: 1px solid #efefef;
  border-right: none;
  border-radius: 0.25rem 0 0 0.25rem;
}

form input[type="text"]:hover,
form input[type="text"]:focus {
  border-color: #2c3e50;
}

form input[type="submit"] {
  background: #2c3e50;
  border: 1px solid #2c3e50;
  border-radius: 0 0.25rem 0.25rem 0;
  color: white;
  cursor: pointer;
}

form input[type="submit"]:hover,
form input[type="submit"]:focus {
  opacity: 0.8;
}
</style>