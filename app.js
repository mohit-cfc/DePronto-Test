console.log("Hello");
const button = document.querySelector("#btn");
const container = document.querySelector("#container");
button.addEventListener("click", () => {
  console.log("Clicked");
});
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    for (d of data) {
      const card = document.createElement("div");
      card.classList.add("card");
      card.classList.add("w-75");
      card.classList.add("mt-3");
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
      card.appendChild(cardBody);

      const cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title");
      cardTitle.innerText = d.title;
      cardBody.appendChild(cardTitle);

      const cardText = document.createElement("p");
      cardText.classList.add("card-text");
      cardText.innerText = d.body;
      cardBody.appendChild(cardText);

      container.appendChild(card);

      console.log(d);
    }
  });
