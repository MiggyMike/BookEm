import ApiClient from './ApiClient';

export const __CreateReview = async (formData, serviceId, userId) => {
  try {
    const res = await ApiClient.post(
      `/reviews/${serviceId}/user/${userId}`,
      formData
    );
    console.log('CREATED:', res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};
