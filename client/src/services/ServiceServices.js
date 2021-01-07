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
