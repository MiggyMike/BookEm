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
        const res = await ApiClient.get(`/services/`);
        return res.data;
    } catch (error) {
        throw error;
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

export const __DeleteService = async (serviceId) => {
    try {
        const res = await ApiClient.delete(
            `/services/${serviceId}?active=true`
        );
        return res;
    } catch (error) {
        throw error;
    }
};

export const __UpdateService = async (formData, serviceId) => {
    try {
        const res = await ApiClient.put(
            `/services/${serviceId}?active=true`,
            formData
        );
        console.log(res.data);
        return res.data;
    } catch (error) {
        throw error;
    }
};

// export const __GetUserService = async (userId) => {
//   try {
//     const res = await ApiClient.get(`/services/user/${userId}`);
//     return res.data;
//   } catch (err) {
//     throw err;
//   }
// };
