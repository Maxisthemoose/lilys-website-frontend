const axios = require("axios").default;
const { baseApiUri } = require("./baseUrl");

export async function sendEmail(data) {

  const obj = {};
  for (let i = 1; i < 7; i++) {
    obj[data[i].name] = data[i].value;
  }

  await axios.post(`${baseApiUri}/email`, obj, {
    headers: {
      "Content-Type": "application/json",
    }
  });
}