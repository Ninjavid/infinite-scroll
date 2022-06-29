const imageContainer = document.getElementById("imageContainer");
const loader = document.getElementById("loader");

let photosArray = [];

// unsplash API
const count = 10;
const apiKey = "CV7q5kYIV8y6uEczGsS_tR3nnblf7cOas08DTjf38RM";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Create elements for links and photos add to DOM
function displayPhotos() {
  // run function for eachc object in photos array
  photosArray.forEach((photo) => {
    // create <a> to link to unsplash
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");
    // create <img> for photo
    const img = document.createElement("img");
    img.setAttribute("src, photo.urls.regular");
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);
    // Put <img> inside <a>, then put both inside imageContainer Element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// get photos from unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    // catch error here
  }
}

// on load
getPhotos();
