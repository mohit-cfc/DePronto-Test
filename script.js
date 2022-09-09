const get = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      let html = "";
      json.map((item) => {
        html += `
        <div class="card w-75" id='${item.id}'>
          <div class="card-body">
            <h6 class="card-title">${item.title}</h6>
            <p class="card-text">${item.body}</p>
          </div>
        </div>
        <button type="button" id=${item.id}  class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal${item.id}">
          Launch Modal
        </button>

        <div class="modal fade" id="exampleModal${item.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">${item.title}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                    <p class="card-text">${item.body}</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        `;
      });
      document.querySelector("#data").innerHTML = html;
    });
};
get("https://jsonplaceholder.typicode.com/posts/");
