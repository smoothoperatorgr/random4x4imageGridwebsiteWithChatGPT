// function to get a random image URL
function getRandomImageURL() {
    const width = Math.floor(Math.random() * 400) + 200; // get a random width between 200 and 599
    const height = Math.floor(Math.random() * 400) + 200; // get a random height between 200 and 599
    return `https://picsum.photos/${width}/320`;
  }
  
  // function to create a new image grid
  function createImageGrid() {
    const container = document.getElementById('image-grid-container');
    container.innerHTML = ''; // clear the container
    for (let i = 0; i < 16; i++) {
      const imageURL = getRandomImageURL();
      const imageElement = document.createElement('img');
      imageElement.src = imageURL;
      container.appendChild(imageElement);
    }
  }
  
  // create a new image grid when the button is clicked
  const button = document.getElementById('new-images-button');
  button.addEventListener('click', createImageGrid);
  
  // create the initial image grid
  createImageGrid();
  
