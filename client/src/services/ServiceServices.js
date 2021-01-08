import ApiClient from './ApiClient';

export const __CreateService = async (formData, userId) => {
  try {
    const res = await ApiClient.post(`/services/${userId}`, formData);
    console.log('UPLOADED:', res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetServices = async (page, limit) => {
  try {
    const res = await ApiClient.get(
      `/services?page=${page || 1}&limit=${limit || 10}`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetUserService = async (userId) => {
  try {
    const res = await ApiClient.get(`/services/user/${userId}`);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const __GetServiceById = async (serviceId) => {
  try {
    const res = await ApiClient.get(`/services/${serviceId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
