const axios = require("axios").default;
const baseUrl = "https://glacial-inlet-58614.herokuapp.com";

export default async function () {
  return axios.get(`${baseUrl}/products`);
}