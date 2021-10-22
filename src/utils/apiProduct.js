import axios from "axios";
import GetToken from "./getToken";

export const getProducts = async (successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: "https://fierce-ridge-23269.herokuapp.com/productos/",
    headers: { Authorization: GetToken(),}
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const addProduct = async (data, successCallback, errorCallback) => {
  const options = {
    method: "POST",
    url: "https://fierce-ridge-23269.herokuapp.com/productos/",
    headers: { "Content-Type": "application/json", Authorization: GetToken(), },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const updateProduct = async (
  id,
  data,
  successCallback,
  errorCallback
) => {
  const options = {
    method: "PATCH",
    url: `https://fierce-ridge-23269.herokuapp.com/productos/${id}/`,
    headers: { "Content-Type": "application/json" , Authorization: GetToken(),},
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const deleteProduct = async (id, successCallback, errorCallback) => {
  const options = {
    method: "DELETE",
    url: `https://fierce-ridge-23269.herokuapp.com/productos/${id}/`,
    headers: { "Content-Type": "application/json", Authorization: GetToken(), },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
