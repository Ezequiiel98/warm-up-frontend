import api from './api';

export const getAllPost = () => api.get('/posts');
export const createNewPost = (data) => api.post('/posts', data);
export const getPostById = (id) => api.get(`/posts/${id}`);
export const updatePost = ({ id, data }) => api.patch(`/posts/${id}`, data);
export const deletePost = (id) => api.delete(`/posts/${id}`);
