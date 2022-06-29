const axios = require("axios").default;
const { baseApiUri } = require("./baseUrl");

export default async function () {
  return axios.get(`${baseApiUri}/products`);
}