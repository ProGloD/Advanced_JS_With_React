const axios = require("axios");

const API_ROOT = "http://ec2-13-53-46-89.eu-north-1.compute.amazonaws.com:3000";

axios
  .post(API_ROOT + "/auth", { email: "bob@example.com", password: "bob123" })
  .then(response => {
    const token = response.data.token;

    axios
      .get(`${API_ROOT}/me`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => console.log(response.data));
  });
