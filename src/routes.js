import BookShelf from './components/BookShelf';
import BookSearch from './components/BookSearch';

// lazy load
// const BookShelf = resolve => {
//   require.ensure(['./components/BookShelf.vue'], () => {
//     resolve(require('./components/BookShelf.vue'));
//   })
// };

// const BookSearch = resolve => {
//   require.ensure(['./components/BookSearch.vue'], () => {
//     resolve(require('./components/BookSearch.vue'));
//   })
// };

export default [
  { path: '/', component: BookSearch },
  { path: '/bookshelf', component: BookShelf },
];