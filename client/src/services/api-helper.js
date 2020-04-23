import axios from 'axios';

const baseUrl = 'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl
})

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', { auth: loginData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false
}



export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
}

export const readAllUsers = async () => {
  const resp = await api.get('/users')
  return resp.data
}

export const updateUser = async (id, data) => {
  const resp = await api.put(`/users/${id}`, { user: data })
  return resp.data
}

export const destroyUser = async (id) => {
  const resp = await api.delete(`/users/${id}`)
  return resp.data
}
// ---------------------remedies----------------------

export const createRemedy = async (data ) => {
    const resp = await api.post('/remedies', {remedy:data})
    return resp.data
}
export const viewAllMoods = async () => {
  const resp = await api.get('/moods')
  return resp.data
}