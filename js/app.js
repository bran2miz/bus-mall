
// 'use strict';

// Product.allProducts = [];
// let mainElem = document.getElementById('main')
// let h1LeftElem = document.getElementById('left-h1');
// let imgLeftElem = document.getElementById('left-img')
// let h1MiddleElem = document.getElementById('middle-h1');
// let imgMiddleElem = document.getElementById('middle-img')
// let h1RightElem = document.getElementById('right-h1');
// let imgRightElem = document.getElementById('right-img')
// let resultsUlElem = document.getElementById('results');
// let resultsButtonElem = document.getElementById('results-button')
// let voteCounter = 0;
// let leftProduct = null;
// let middleProduct = null;
// let rightProduct = null;

// function Product(name, identifier, image) {
// this.name = name;
// this.productIdentifier = identifier;
// this.image = image;
// this.viewedCounter = 0;
// this.votes = 0;

// Product.allProducts.push(this);
// }

// function getRandomNumber() {
//   let allProductIndex = Math.floor((Math.random() * Product.allProducts.length));
//   return allProductIndex;
// }

// function pickThreeProducts() {
//   let leftProductIndex = Math.floor((Math.random() * Product.allProducts.length));
//   leftProduct = Product.allProducts[leftProductIndex];

//   let middleProductIndex = Math.floor((Math.random() * Product.allProducts.length));
//   middleProduct = Product.allProducts[middleProductIndex];

//   while (middleProduct === null || middleProduct === leftProduct) {
//     let middleProductIndex = Math.floor((Math.random() * Product.allProducts.length));
//     middleProduct = Product.allProducts[middleProductIndex];
//   }

//   let rightProductIndex = Math.floor((Math.random() * Product.allProducts.length));
//   rightProduct = Product.allProducts[rightProductIndex];

//   while (rightProduct === null || rightProduct === middleProduct || rightProduct === leftProduct) {
//     let rightProductIndex = Math.floor((Math.random() * Product.allProducts.length));
//     rightProduct = Product.allProducts[rightProductIndex];
//   }

//   leftProduct.renderProduct(h1LeftElem, imgLeftElem);
//   middleProduct.renderProduct(h1MiddleElem, imgMiddleElem);
//   rightProduct.renderProduct(h1RightElem, imgRightElem);
// }

// Product.prototype.renderProduct = function(h1, img) {
// h1.textContent = this.name;
// img.src = this.image;
// this.viewedCounter++;
// }

// function handleClick(event) {
//   let id = event.target.id
//   if (id === 'left-img' || id === 'middle-img' || id === 'right-img') {
//     voteCounter++;
//     console.log(voteCounter);
//     if (id === 'left-img') {
//       leftProduct.votes++;
//     } else if (id === 'middle-img'){
//       middleProduct.votes++;
//     } else {
//       rightProduct.votes++;
//     }
//     pickThreeProducts();
//   } else {
//     alert('try again');
//   }
//   if (voteCounter === 25) {
//     // renderResults();
//     renderButton();
//     // turn off the listener
//     mainElem.removeEventListener('click', handleClick);
//   }
// }

// function handleButtonClick() {
//   renderResults();
// }

// function renderButton() {
//   let buttonElem = document.createElement('button');
//   buttonElem.textContent = 'View Results';
//   buttonElem.addEventListener('click', handleButtonClick);
//   resultsButtonElem.appendChild(buttonElem);
// }

// function renderResults() {
//   resultsUlElem.innerHTML = "";

//   for (let product of Product.allProducts) {
//     let liElem = document.createElement('li');
//     liElem.textContent = `${product.productIdentifier} had ${product.votes} votes, and was seen ${product.viewedCounter} times.`;
//     resultsUlElem.appendChild(liElem);
//   }
// }

// mainElem.addEventListener('click', handleClick);

// new Product('Banana Slicer', 'banana', 'img/assets/banana.jpg');
// new Product('Bathroom Ipad Stand','bathroom', 'img/assets/bathroom.jpg');
// new Product('Open Toe Rain Boots', 'boots' ,'img/assets/boots.jpg');
// new Product('All-in-one Breakfast Maker', 'breakfast' ,'img/assets/breakfast.jpg');
// new Product('Meatball Bubblegum', 'bubblegum' ,'img/assets/bubblegum.jpg');
// new Product('Chair', 'chair' ,'img/assets/chair.jpg');
// new Product('Cthulu Action Figure', 'cthulhu', 'img/assets/cthulhu.jpg');
// new Product('Duck Bill Dog Muzzle', 'dog-duck' ,'img/assets/dog-duck.jpg');
// new Product('Dragon Meat', 'dragon' ,'img/assets/dragon.jpg');
// new Product('Utensil Pens', 'pen' ,'img/assets/pen.jpg');
// new Product('Pet Sweeper', 'pet-sweep' ,'img/assets/pet-sweep.jpg');
// new Product('Pizza Scissors', 'scissors' ,'img/assets/scissors.jpg');
// new Product('Shark Sleeping Bag', 'shark' ,'img/assets/shark.jpg');
// new Product('Baby Onesie Sweeper', 'sweep' ,'../img/assets/sweep.png');
// new Product('Tauntaun Sleeping Bag', 'tauntaun' ,'../img/assets/tauntaun.jpg');
// new Product('Unicorn Meat', 'unicorn','../img/assets/unicorn.jpg');
// new Product('Perpetual Watering Can', 'water-can','../img/assets/water-can.jpg');
// new Product('Wine Glass With Hole', 'wine-glass','../img/assets/wine-glass.jpg');

// pickThreeProducts();

// console.log(Product.allProducts);

'use strict';

// global variables -----------------------------------------------------------
let allProducts = [];
// querySelector = method
let myContainer = document.querySelector('section');
let myButton = document.querySelector('section + div');
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.querySelector('section img:nth-child(3)');
let clicks = 0;
let clicksAllowed = 25;

// constructor
function Products(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `img/${name}.${fileExtension}`;
  this.views = 0;
  this.clicks = 0;
  allProducts.push(this);
}
function selectRandomProduct() {
  return Math.floor(Math.random() * allProducts.length);
}
function renderProducts() {
  // call the selectRandomProduct
  let prod1 = selectRandomProduct();
  let prod2 = selectRandomProduct();
  let prod3 = selectRandomProduct();
  // push product values into array
  // google MDN array has value
  while  (prod1 === prod2 || prod1 === prod3 || prod2 === prod3) {
    prod2 = selectRandomProduct();
    prod3 = selectRandomProduct();
  }
  image1.src = allProducts[prod1].src;
  image2.src = allProducts[prod2].src;
  image3.src = allProducts[prod3].src;
  image1.alt = allProducts[prod1].name;
  image2.alt = allProducts[prod2].name;
  image3.alt = allProducts[prod3].name;
  allProducts[prod1].views++;
  allProducts[prod2].views++;
  allProducts[prod3].views++;
}
function handleProductClick(event) {
  if (event.target === myContainer) {
    alert('Please click on an image');
  }
  clicks++;
  let clickedProduct = event.target.alt;
  console.log(clickedProduct);
  for (let i = 0; i < allProducts.length; i++) {
    if (clickedProduct === allProducts[i].name) {
      allProducts[i].clicks++;
      break;
    }
  }
  renderProducts();
  if (clicks === clicksAllowed) {
    myButton.className = 'clicks-allowed';
    myContainer.removeEventListener('click', handleProductClick);
  }
}
function renderResults() {
  let ul = document.querySelector('ul');
  for (let i = 0; i < allProducts.length; i++) {
    let li = document.createElement('li')
    li.textContent = `${allProducts[i].name} had ${allProducts[i].views} view and was clicked ${allProducts[i].clicks} times.`;
    ul.appendChild(li);
  }
}
new Products('Banana Slicer', 'banana', 'img/assets/banana.jpg');
new Products('Bathroom Ipad Stand','bathroom', 'img/assets/bathroom.jpg');
new Products('Open Toe Rain Boots', 'boots' ,'img/assets/boots.jpg');
new Products('All-in-one Breakfast Maker', 'breakfast' ,'img/assets/breakfast.jpg');
new Products('Meatball Bubblegum', 'bubblegum' ,'img/assets/bubblegum.jpg');
new Products('Chair', 'chair' ,'img/assets/chair.jpg');
new Products('Cthulu Action Figure', 'cthulhu', 'img/assets/cthulhu.jpg');
new Products('Duck Bill Dog Muzzle', 'dog-duck' ,'img/assets/dog-duck.jpg');
new Products('Dragon Meat', 'dragon' ,'img/assets/dragon.jpg');
new Products('Utensil Pens', 'pen' ,'img/assets/pen.jpg');
new Products('Pet Sweeper', 'pet-sweep' ,'img/assets/pet-sweep.jpg');
new Products('Pizza Scissors', 'scissors' ,'img/assets/scissors.jpg');
new Products('Shark Sleeping Bag', 'shark' ,'img/assets/shark.jpg');
new Products('Baby Onesie Sweeper', 'sweep' ,'../img/assets/sweep.png');
new Products('Tauntaun Sleeping Bag', 'tauntaun' ,'../img/assets/tauntaun.jpg');
new Products('Unicorn Meat', 'unicorn','../img/assets/unicorn.jpg');
new Products('Perpetual Watering Can', 'water-can','../img/assets/water-can.jpg');
new Products('Wine Glass With Hole', 'wine-glass','../img/assets/wine-glass.jpg');

console.log(allProducts);
renderProducts();

myContainer.addEventListener('click', handleProductClick);
myButton.addEventListener('click', renderResults);