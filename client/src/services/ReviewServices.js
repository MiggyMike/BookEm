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

export const __GetReviewsByService = async (service_id) => {
  try {
    const res = await ApiClient.get(`/reviews/${service_id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
