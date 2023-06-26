const id = localStorage.getItem("IdProdotto");
console.log(id);
const dettagliProduct = document.getElementById("dettagliProdotto");
const homepage = document.getElementById("homepage");
homepage.addEventListener("click", () => {
  location.href = "homepage.html";
});
const backoffice = document.getElementById("backoffice");
backoffice.addEventListener("click", () => {
  location.href = "backoffice.html";
});
window.onload = function () {
  fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
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
      const dettagliDiv = document.createElement("div");
      dettagliDiv.innerHTML = `<img class='mb-4' src="${data.imageUrl}">
      <h3>Nome del prodotto: ${data.name}</h3>
      <p>Marca del prodotto: ${data.brand}</p>
      <p>Descrizione: ${data.description}</p>
      <p>Prezzo: ${data.price}</p>`;
      dettagliProduct.appendChild(dettagliDiv);
    })
    .catch((error) => {
      console.error("Errore:", error);
    });
};
