const axios = require("axios");
const namee = document.getElementById("name");
const age = document.getElementById("age");
const email = document.getElementById("email");

const detailForm = document.getElementById("form");

detailForm.addEventListener("submit", (e) => {
  e.preventDefault();

  axios
    .post(`/employee/addname`, {
      name: namee.value,
      email: email.value,
      age: age.value,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
});
