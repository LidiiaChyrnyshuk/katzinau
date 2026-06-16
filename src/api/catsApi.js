import axios from "axios";

const API = "http://localhost:5000/api/cats";

export const getCats = () => axios.get(API);

export const createCat = (cat) => axios.post(API, cat);

export const updateCat = (id, data) => axios.put(`${API}/${id}`, data);

export const deleteCat = (id) => axios.delete(`${API}/${id}`);
