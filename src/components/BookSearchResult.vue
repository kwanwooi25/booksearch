<template>
  <ul @scroll="handleScroll">
    <li v-for="(book, index) in books" :key="index + book.title">
      <div class="thumbnail">
        <img :src="book.thumbnail" :alt="book.title">
      </div>
      <div class="content">
        <a :href="book.url" target="_blank">{{ book.title }}</a>
        <p>
          by
          <span
            v-for="(author, index) in book.authors"
            :key="author + index"
          >
            {{ author }}
          </span>
        </p>
      </div>
      <div class="buttons">
        <button>관심</button>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'BookSearchResult',

  computed: {
    ...mapGetters([
      'books',
      'totalCount',
    ]),
  },

  methods: {
    ...mapActions([
      'fetchMoreBooks'
    ]),
    // Infinite Scroll
    handleScroll(e) {
      if (this.books.length >= this.totalCount) return;

      const { scrollHeight, scrollTop, clientHeight } = e.target;
      if (scrollTop + clientHeight >= scrollHeight) {
        this.fetchMoreBooks();
      }
    }
  }
}
</script>

<style scoped>
ul {
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: auto;
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  border: 1px solid #dedede;
  border-radius: 0.25rem;
  margin: 1rem;
  padding: 1rem;
  display: flex;
}

.thumbnail {
  width: 100px;
  height: 120px;
  overflow: hidden;
}

img {
  max-height: 120px;
}

a,
p {
  color: #2c3e50;
  margin: 0 0.5rem 0.5rem;
  padding: 0;
}

a:hover {
  text-decoration: underline;
}
</style>