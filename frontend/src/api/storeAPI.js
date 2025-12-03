import axiosClient from './axiosClient';

const storeAPI = {
  // admin: get all stores
  getAll: () => axiosClient.get('/stores'),

  // user: browsing stores
  browse: () => axiosClient.get('/stores?include=ratings'),

  // owner: stores owned by logged-in owner
  getMyStores: () => axiosClient.get('/stores/my'),

  // admin: create store
  create: (data) => axiosClient.post('/stores', data),

  // admin: update store
  update: (id, data) => axiosClient.put(`/stores/${id}`, data),

  // admin: delete store
  remove: (id) => axiosClient.delete(`/stores/${id}`),

  // fetch single store with ratings included
  getDetails: (id) => axiosClient.get(`/stores/${id}`)
};

export default storeAPI;
