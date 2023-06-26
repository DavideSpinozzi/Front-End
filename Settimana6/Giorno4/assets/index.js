window.onload = () =>{
    fetch(" https://api.pexels.com/v1/search?query=[your-query]", {
        headers:{
            Authorization: "pt2jFLEtH2k87Gbt1MGEzNrQ3LCn41GoWMbzHgLTcPBUyWTCgfpzB3P7"
        }
    })
}
// API endpoints
const primaryEndpoint = 'https://api.pexels.com/v1/search?query=[your-query]';
const secondaryEndpoint = 'https://api.pexels.com/v1/search?query=[your-secondary-query]';
// API key
const apiKey = 'pt2jFLEtH2k87Gbt1MGEzNrQ3LCn41GoWMbzHgLTcPBUyWTCgfpzB3P7';

// References to DOM elements
const loadImagesBtn = document.querySelector('.btn-primary');
const loadSecondaryImagesBtn = document.querySelector('.btn-secondary');
const searchForm = document.querySelector('.search-form');
const cardsContainer = document.querySelector('.album .row');

// Event listener for loading primary images
loadImagesBtn.addEventListener('click', () => {
  const query = 'https://api.pexels.com/v1/search?query=[your-query]';
  getImages(query, primaryEndpoint);
});

// Event listener for loading secondary images
loadSecondaryImagesBtn.addEventListener('click', () => {
  const query = 'https://api.pexels.com/v1/search?query=[your-secondary-query]';
  getImages(query, secondaryEndpoint);
});

// Event listener for submitting search form
searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = searchForm.querySelector('input').value;
  getImages(query, primaryEndpoint);
  searchForm.reset();
});

// Function for fetching images from the API and rendering them on the page
async function getImages(query, endpoint) {
  const url = endpoint + encodeURIComponent(query);
  const response = await fetch(url, {
    headers: {
      Authorization: apiKey
    }
  });
  const data = await response.json();
  renderImages(data.photos);
}

// Function for rendering images on the page
function renderImages(photos) {
  cardsContainer.innerHTML = '';
  photos.forEach((photo) => {
    const card = document.createElement('div');
    card.classList.add('col-md-4');
    card.innerHTML = `
      <div class="card mb-4 shadow-sm">
        <img src="${photo.src.medium}" alt="${photo.photographer}" class="bd-placeholder-img card-img-top">
        <div class="card-body">
          <h5 class="card-title">${photo.photographer}</h5>
          <p class="card-text">${photo.id}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
              <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              <button type="button" class="btn btn-sm btn-outline-secondary hide-btn">Hide</button>
            </div>
            <small class="text-muted">${photo.width} x ${photo.height}</small>
          </div>
        </div>
      </div>
    `;
    const viewBtn = card.querySelector('.btn-group .btn:first-child');
    viewBtn.addEventListener('click', () => {
      viewImage(photo);
    });
    const hideBtn = card.querySelector('.hide-btn');
    hideBtn.addEventListener('click', () => {
      card.remove();
    });
    cardsContainer.appendChild(card);
  });
}

// Function for viewing an image in detail
function viewImage(photo) {
  const url = photo.url;
  window.open(url, '_blank');
}