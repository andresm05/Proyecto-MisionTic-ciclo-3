import axios from "axios";
import GetToken from "./getToken";

// const baseURL = "http://localhost:5000"
const baseURL = "https://aqueous-garden-65379.herokuapp.com";

export const getSales = async (successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: `${baseURL}/ventas/`,
    headers: { Authorization: GetToken(),}
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const addSale = async (data, successCallback, errorCallback) => {
  const options = {
    method: "POST",
    url: `${baseURL}/ventas/`,
    headers: { "Content-Type": "application/json", Authorization: GetToken(), },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const updateSale = async (
  id,
  data,
  successCallback,
  errorCallback
) => {
  const options = {
    method: "PATCH",
    url: `${baseURL}/ventas/${id}/`,
    headers: { "Content-Type": "application/json" , Authorization: GetToken(),},
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const deleteSale = async (id, successCallback, errorCallback) => {
  const options = {
    method: "DELETE",
    url: `${baseURL}/ventas/${id}/`,
    headers: { "Content-Type": "application/json", Authorization: GetToken(), },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
