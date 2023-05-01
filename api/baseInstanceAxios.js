import axios from "axios";

export const baseInstanceAxios = axios.create({
  baseURL: 'https://common-api.admiral-studios.com/Onliq',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});