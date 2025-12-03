import axiosClient from './axiosClient';

const ratingAPI = {
  // user: add or update rating
  rateStore: (storeId, value) =>
    axiosClient.post('/ratings', { storeId, value }),

  // owner: view ratings for a specific store
  getStoreRatings: (storeId) =>
    axiosClient.get(`/ratings/store/${storeId}`),

  // admin: all ratings
  getAll: () => axiosClient.get('/ratings'),

  // admin: delete rating
  delete: (id) => axiosClient.delete(`/ratings/${id}`)
};

export default ratingAPI;
