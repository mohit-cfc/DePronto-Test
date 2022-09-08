const form = document.querySelector("#form");
console.log("Hello");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  for (let data of form.elements) {
    console.log(data.value);
  }
});
