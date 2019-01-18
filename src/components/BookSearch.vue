<template>
  <div>
    <BookSearchForm />
    <BookSearchResult />
  </div>
</template>

<script>
import BookSearchForm from './BookSearchForm';
import BookSearchResult from './BookSearchResult';

export default {
  name: 'BookSearch',

  components: {
    BookSearchForm,
    BookSearchResult,
  },
}
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 768px;
  margin: auto;
}
</style>