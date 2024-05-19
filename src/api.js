import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

// PUBLICATIONS ENDPOINTS
export const fetchPublications = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/publications`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching publications:', error);
    }
};

export const createPublication = async (publicationAttributes) => {
    try {
        const response = await axios.post(`${BASE_URL}/publications`, publicationAttributes);
        console.log('Publication created:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating publication:', error);
    }
};

export const updatePublication = async (id, publicationAttributes) => {
    try {
        const response = await axios.put(`${BASE_URL}/publications/${id}`, publicationAttributes);
        console.log('Publication updated:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error updating publication:', error);
    }
};

export const deletePublication = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/publications/${id}`);
        console.log('Publication deleted:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error deleting publication:', error);
    }
};

// FINANCES ENDPOINTS
export const fetchFinances = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/finances`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching finances:', error);
    }
};

export const updateFinances = async (id, financeAttributes) => {
    try {
        const response = await axios.put(`${BASE_URL}/finances/${id}`, financeAttributes);
        console.log('Finance updated:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error updating finance:', error);
    }
};

export const deleteFinances = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/finances/${id}`);
        console.log('Finances deleted:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error deleting finances:', error);
    }
};


// PROMOTIONS ENDPOINTS
export const fetchPromotions = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/promotions`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching promotions:', error);
    }
};

export const createPromotion = async (promotionAttributes) => {
    try {
        const response = await axios.post(`${BASE_URL}/promotions`, promotionAttributes);
        console.log('Promotion created:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating promotion:', error);
    }
};

export const updatePromotion = async (id, promotionAttributes) => {
    try {
        const response = await axios.put(`${BASE_URL}/promotions/${id}`, promotionAttributes);
        console.log('Promotion updated:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error updating promotion:', error);
    }
};

export const deletePromotion = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/promotions/${id}`);
        console.log('Promotion deleted:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error deleting promotion:', error);
    }
};

// USER ENDPOINTS
export const fetchUsers = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/user`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
    }
};

export const createUser = async (userAttributes) => {
    try {
        const response = await axios.post(`${BASE_URL}/user`, userAttributes);
        console.log('User created:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error);
    }
};

export const updateUser = async (id, userAttributes) => {
    try {
        const response = await axios.put(`${BASE_URL}/user/${id}`, userAttributes);
        console.log('User updated:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error updating user:', error);
    }
};

export const testApiPresence = () => {
    console.log('Hey there');
};
