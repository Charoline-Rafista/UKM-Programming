// src/services/api.js
import axios from "axios";

const API_URL = "http://localhost:1337/api";

export const fetchProdukList = () => {
  return axios.get(`${API_URL}/produk-skincares?populate=*`);
};

export const fetchProdukById = (id) => {
  return axios.get(`${API_URL}/produk-skincares/${id}?populate=*`);
};

export const fetchAhliKulitList = () => {
  return axios.get(`${API_URL}/ahli-kulits`);
};
