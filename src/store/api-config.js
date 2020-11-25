export const route = {
  get: {
    login() {
      return `/login`;
    },
    hotels() {
      return `/hotels`;
    },
    hotel(hotelId) {
      return `/hotels/${hotelId}`;
    },
    hotelsNearby(hotelId) {
      return `/hotels/${hotelId}/nearby`;
    },
    favorite() {
      return `/favorite`;
    },
    comments(hotelId) {
      return `/comments/${hotelId}`;
    },
  },
  post: {
    login() {
      return `/login`;
    },
    favoriteStatus(hotelId, status) {
      return `/favorite/${hotelId}/${status}`;
    },
    comments(hotelId) {
      return `/comments/${hotelId}`;
    },
  }
};
