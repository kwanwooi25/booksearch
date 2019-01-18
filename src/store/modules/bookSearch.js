import bookSearchAxios from '../../api/bookSearch';

const state = {
  searchTerm: '',
  books: [],
  pageSize: 20,
  page: 1,
  totalCount: 0,
};

const getters = {
  searchTerm: state => state.searchTerm,
  books: state => state.books,
  pageSize: state => state.pageSize,
  page: state => state.page,
  totalCount: state => state.totalCount,
};

const mutations = {
  updateSearchTerm: (state, searchTerm) => state.searchTerm = searchTerm,
  increasePage: (state) => state.page++,
  resetPage: (state) => state.page = 1,
  updateTotalCount: (state, totalCount) => state.totalCount = totalCount,
  resetTotalCount: (state) => state.totalCount = 0,
  setBooks: (state, books) => state.books = books,
  addBooks: (state, books) => state.books = [...state.books, ...books],
};

const actions = {
  updateSearchTerm: ({ commit }, value) => {
    commit('updateSearchTerm', value);
  },

  fetchBooks: async ({ commit }) => {
    const { searchTerm, pageSize } = state;
    const { resetPage, resetTotalCount, setBooks } = mutations;

    resetPage(state);
    resetTotalCount(state);
    setBooks(state, []);

    if (!searchTerm) return;

    try {
      const res = await bookSearchAxios({
        params: {
          query: searchTerm,
          size: pageSize,
        }
      });
  
      commit('setBooks', res.data.documents);
      commit('updateTotalCount', res.data.meta.total_count);
    } catch(error) {
      // console.log(error);
    }
  },

  fetchMoreBooks: async ({ commit }) => {
    mutations.increasePage(state);
    const { searchTerm, pageSize, page } = state;

    try {
      const res = await bookSearchAxios({
        params: {
          query: searchTerm,
          size: pageSize,
          page: page,
        }
      });

      commit('addBooks', res.data.documents);
    } catch(error) {
      // console.log(error);
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions,
};