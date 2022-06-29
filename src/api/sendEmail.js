const axios = require("axios").default;
const baseUrl = "https://glacial-inlet-58614.herokuapp.com";

export async function sendEmail(data) {

  const obj = {};
  for (let i = 1; i < 7; i++) {
    obj[data[i].name] = data[i].value;
  }

  await axios.post(`${baseUrl}/email`, obj, {
    headers: {
      "Content-Type": "application/json",
    }
  });
}