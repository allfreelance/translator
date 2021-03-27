export default {
  state: {
    books: [
      {
        id: 'sdgsfhgfsdg0',
        title: 'Harry Potter - 1',
        description: 'Первая глава',
        imageId: 'dfhgdfhgdsf',
        parts: 7,
        level: ['B1', 'C1'],
        rating: 4,
        ratingCount: 100,
        youtube_playlist_id: 'sfgfdhg0'
      },
      {
        id: 'sdgsfhgfsdgfsdg0',
        title: 'Harry Potter - 2',
        description: 'Вторая глава',
        imageId: 'dfhsdfgdfhgdsf',
        parts: 3,
        level: ['A2', 'C2'],
        rating: 4.5,
        ratingCount: 150,
        youtube_playlist_id: 'sfgfsdfdhg0'
      },
      {
        id: 'sdgsfhsdsdfgfsdg0',
        title: 'Harry Potter - 3',
        description: 'Третья глава',
        imageId: 'dfhgdfsshgdsf',
        parts: 7,
        level: ['C1'],
        rating: 2,
        ratingCount: 70,
        youtube_playlist_id: 'sfgfdshg0'
      }
    ]
  },
  mutations: {
    SET_BOOKS(state, payload) {
      state.books = payload
    }
  },
  getters: {
    getBooks: (state) => state.books,
  }
}