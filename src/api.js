import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const fetchPublication = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/publications/${id}`);
        console.log('Publication:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching publication:', error.message);
    }
};

export const fetchPublications = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/publications`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching publications:', error);
    }
};

export const searchPublications = async (category, value) => {
    try {
        const encodedCategory = encodeURIComponent(category);
        const encodedValue = encodeURIComponent(value);
        console.log(`${BASE_URL}/publications/${encodedCategory}/${encodedValue}`);
        const response = await axios.get(`${BASE_URL}/publications/${encodedCategory}/${encodedValue}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error searching publications:', error);
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

export const testApiPresence = () => {
    console.log('Hey there');
};
