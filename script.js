// unsplash API
const count = 10;
const apiKey = "CV7q5kYIV8y6uEczGsS_tR3nnblf7cOas08DTjf38RM";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// get photos from unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // catch error here
  }
}

// on load
getPhotos();
