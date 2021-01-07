import ApiClient from './ApiClient';

export const __RegisterUser = async (formData) => {
  try {
    const res = await ApiClient.post('/users/register', formData);
    console.log('registered');
    console.log('REGISTERED:', res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __LoginUser = async (userData) => {
  try {
    const res = await ApiClient.post('/users/login', userData);
    localStorage.setItem('token', res.data.token);
    console.log('Logged in', res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetProfile = async (userId) => {
  try {
    const res = await ApiClient.get(`/users/${userId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __CheckSession = async () => {
  try {
    const res = await ApiClient.get('/users/refresh/session');
    console.log('Session:', res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};
