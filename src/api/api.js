import axios from 'axios';

const API_BASE_URL = 'http://localhost:3003';

export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('API isteği başarısız:', error);
    throw error; 
  }
};

export const postData = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users`, formData);
    return response.data;
  } catch (error) {
    console.error('POST isteği başarısız:', error);
    throw error;
  }
};
