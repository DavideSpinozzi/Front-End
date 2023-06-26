const backoffice = document.getElementById("backoffice");
const formDiv = document.getElementById("form");
const allProducts = document.querySelector(".ok");
backoffice.addEventListener("click", () => {
  location.href = "backoffice.html";
});
function modificaProdotto(id, card) {
  formDiv.innerHTML = "";
  card.setAttribute("style", "width: 100%");
  AppendiCard.appendChild(card);
  const form = `<h3 class='mt-4 text-warning'>Stai modificando un prodotto</h3>
  <form class='m-5'>
    <label for="name">Nome:</label>
    <input type="text" id="name" name="name" required><br><br>
    <label for="description">Descrizione:</label>
    <input type="text" id="description" name="description" required><br><br>
    <label for="brand">Marca:</label>
    <input type="text" id="brand" name="brand" required><br><br>
    <label for="imageUrl">URL Immagine:</label>
    <input type="text" id="imageUrl" name="imageUrl" required><br><br>
    <label for="price">Prezzo:</label>
    <input type="number" id="price" name="price" min="1" required><br><br>
    <div class='d-flex justify-content-between'> 
    <button class='btn btn-outline-info btn-lg btn-radius' type="submit">Modifica</button>
    <button class='btn btn-outline-info btn-lg btn-radius' type="reset">Pulisci campi</button>
    </div>
  </form>
`;
  formDiv.innerHTML += form;
  const pulisciButton = document.querySelector('button[type="reset"]');
  pulisciButton.addEventListener("click", PulisciCampi);
  function PulisciCampi() {
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => (input.value = ""));
  }

  const ElementoForm = document.querySelector("form");
  ElementoForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const brand = document.getElementById("brand").value;
    const imageUrl = document.getElementById("imageUrl").value;
    const price = document.getElementById("price").value;

    const product = {
      name: name,
      description: description,
      brand: brand,
      imageUrl: imageUrl,
      price: price,
    };
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/product/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMTAzNzg4Zjc0MDAwMTQyODc1M2UiLCJpYXQiOjE2ODM4ODYxMzUsImV4cCI6MTY4NTA5NTczNX0.yIojYq3hlugeM3ffweWWVSptfcVsQmqfMuLMErMt9R0",
          },
          body: JSON.stringify(product),
        }
      );
      if (!response.ok) {
        throw new Error("Errore nella modifica del prodotto");
      }
      const newProduct = await response.json();
      console.log("Prodotto modificato con successo:", newProduct);
      location.reload();
    } catch (error) {
      console.error(error);
    }
  });
}
function dettagliProdotto(id) {
  localStorage.setItem("IdProdotto", id);
  location.href = "dettagli.html";
}
window.onload = function visualizzaProdotti() {
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    headers: {
      Authorization:
        "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMTAzNzg4Zjc0MDAwMTQyODc1M2UiLCJpYXQiOjE2ODM4ODYxMzUsImV4cCI6MTY4NTA5NTczNX0.yIojYq3hlugeM3ffweWWVSptfcVsQmqfMuLMErMt9R0",
    },
  })
    .then((res) => {
      console.log(res);
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore nel recupero degli eventi!");
      }
    })
    .then((data) => {
      console.log(data);
      for (let index = 0; index < data.length; index++) {
        const card = `<div class= 'col-3 p-2'>
          <div class="card h-100">
                     <img class="card-img-top" src="${data[index].imageUrl}">
                      <div class="card-body d-flex flex-column justify-content-between">
                        <h5 class="card-title">${data[index].name}</h5>
                        <p class='card-text'>${data[index].brand}</p>
                        <p class='card-text'>${data[index].description}</p>
                          <p class="card-text">${data[index].price}</p>
                          <button class='my-2 btn btn-outline-warning btn-lg btn-radius' onclick='modificaProdotto("${data[index]._id}", this.parentElement.parentElement.parentElement)'>Modifica</button>
                          <button class="btn btn-outline-info btn-lg btn-radius" onclick='dettagliProdotto("${data[index]._id}")'>Scopri di più</button>
                     </div>
                      </div>
                </div>`;
        allProducts.innerHTML += card;
      }
    })
    .catch((error) => {
      console.error("Errore:", error);
    });
};
