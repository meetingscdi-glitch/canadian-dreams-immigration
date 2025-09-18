import axios from 'axios';

const API_BASE_URL = import.meta.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Contact API
export const contactAPI = {
  sendMail: (contactData) => api.post('/contactUs/sendMail', contactData),
};

// FAQ API
export const faqAPI = {
  getFAQs: () => api.get('/faq/getAllFaqs'),
};

// Blog API
export const blogAPI = {
  getAllBlogs: () => api.get('/blog/getAllBlogs'),
};

// News API
export const newsAPI = {
  getAllLatestNews: () => api.get('/latestNews/getAllLatestNews'),
};

// Team API
export const teamAPI = {
  getAllTeamMembers: () => api.get('/teamMember/getAllTeamMembers'),
};

export default api;
