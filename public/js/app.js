const namee = document.getElementById("name");

const detailForm = document.getElementById("form");

detailForm.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(`/employee/addname/?name=${namee.value}`).then((res) => {
    res.json().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data);
      }
    });
  });
});

console.log("hi");
