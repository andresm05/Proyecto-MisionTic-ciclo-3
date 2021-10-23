import axios from "axios";
import GetToken from "./getToken";

// const baseURL = "http://localhost:5000"
const baseURL = "https://aqueous-garden-65379.herokuapp.com"

export const getUsers = async (successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: `${baseURL}/usuarios`,
    headers: { Authorization: GetToken() },
  };

  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const getUserData = async (successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: `${baseURL}/usuarios/self`,
    headers: { Authorization: GetToken() },
  };

  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const updateUser = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: "PATCH",
    url: `${baseURL}/usuarios/${id}/`,
    headers: { "Content-Type": "application/json", Authorization: GetToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const deleteUser = async (id, successCallback, errorCallback) => {
  const options = {
    method: "DELETE",
    url: `${baseURL}/usuarios/${id}/`,
    headers: { "Content-Type": "application/json", Authorization: GetToken() },
  };

  await axios.request(options).then(successCallback).catch(errorCallback);
};