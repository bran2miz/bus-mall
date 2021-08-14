
'use strict';

Product.allProducts = [];
let mainElem = document.getElementById('main')
let h1LeftElem = document.getElementById('left-h1');
let imgLeftElem = document.getElementById('left-img')
let h1MiddleElem = document.getElementById('middle-h1');
let imgMiddleElem = document.getElementById('middle-img')
let h1RightElem = document.getElementById('right-h1');
let imgRightElem = document.getElementById('right-img')
let resultsUlElem = document.getElementById('results');
let resultsButtonElem = document.getElementById('results-button')
let voteCounter = 0;
let leftProduct = null;
let middleProduct = null;
let rightProduct = null;

function Product(name, identifier, image) {
this.name = name;
this.productIdentifier = identifier;
this.image = image;
this.viewedCounter = 0;
this.votes = 0;

Product.allProducts.push(this);
}

function pickThreeProducts() {
  let leftProductIndex = Math.floor((Math.random() * Product.allProducts.length));
  leftProduct = Product.allProducts[leftProductIndex];

  let middleProductIndex = Math.floor((Math.random() * Product.allProducts.length));
  middleProduct = Product.allProducts[middleProductIndex];

  while (middleProduct === null || middleProduct === leftProduct) {
    let middleProductIndex = Math.floor((Math.random() * Product.allProducts.length));
    middleProduct = Product.allProducts[middleProductIndex];
  }

  let rightProductIndex = Math.floor((Math.random() * Product.allProducts.length));
  rightProduct = Product.allProducts[rightProductIndex];

  while (rightProduct === null || rightProduct === middleProduct || rightProduct === leftProduct) {
    let rightProductIndex = Math.floor((Math.random() * Product.allProducts.length));
    rightProduct = Product.allProducts[rightProductIndex];
  }

  leftProduct.renderProduct(h1LeftElem, imgLeftElem);
  middleProduct.renderProduct(h1MiddleElem, imgMiddleElem);
  rightProduct.renderProduct(h1RightElem, imgRightElem);
}

Product.prototype.renderProduct = function(h1, img) {
h1.textContent = this.name;
img.src = this.image;
this.viewedCounter++;
}

function handleClick(event) {
  let id = event.target.id
  if (id === 'left-img' || id === 'middle-img' || id === 'right-img') {
    voteCounter++;
    console.log(voteCounter);
    if (id === 'left-img') {
      leftProduct.votes++;
    } else if (id === 'middle-img'){
      middleProduct.votes++;
    } else {
      rightProduct.votes++;
    }
    pickThreeProducts();
  } else {
    alert('try again');
  }
  if (voteCounter === 25) {
    // renderResults();
    renderButton();
    // turn off the listener
    mainElem.removeEventListener('click', handleClick);
  }
}

function handleButtonClick() {
  renderResults();
}

function renderButton() {
  let buttonElem = document.createElement('button');
  buttonElem.textContent = 'View Results';
  buttonElem.addEventListener('click', handleButtonClick);
  resultsButtonElem.appendChild(buttonElem);
}

function renderResults() {
  resultsUlElem.innerHTML = "";

  for (let product of Product.allProducts) {
    let liElem = document.createElement('li');
    liElem.textContent = `${product.productIdentifier} had ${product.votes} votes, and was seen ${product.viewedCounter} times.`;
    resultsUlElem.appendChild(liElem);
  }
}

mainElem.addEventListener('click', handleClick);

new Product('Banana Slicer', 'banana', 'img/assets/banana.jpg');
new Product('Bathroom Ipad Stand','bathroom', 'img/assets/bathroom.jpg');
new Product('Open Toe Rain Boots', 'boots' ,'img/assets/boots.jpg');
new Product('All-in-one Breakfast Maker', 'breakfast' ,'img/assets/breakfast.jpg');
new Product('Meatball Bubblegum', 'bubblegum' ,'img/assets/bubblegum.jpg');
new Product('Chair', 'chair' ,'img/assets/chair.jpg');
new Product('Cthulu Action Figure', 'cthulhu', 'img/assets/cthulhu.jpg');
new Product('Duck Bill Dog Muzzle', 'dog-duck' ,'img/assets/dog-duck.jpg');
new Product('Dragon Meat', 'dragon' ,'img/assets/dragon.jpg');
new Product('Utensil Pens', 'pen' ,'img/assets/pen.jpg');
new Product('Pet Sweeper', 'pet-sweep' ,'img/assets/pet-sweep.jpg');
new Product('Pizza Scissors', 'scissors' ,'img/assets/scissors.jpg');
new Product('Shark Sleeping Bag', 'shark' ,'img/assets/shark.jpg');
new Product('Baby Onesie Sweeper', 'sweep' ,'../img/assets/sweep.png');
new Product('Tauntaun Sleeping Bag', 'tauntaun' ,'../img/assets/tauntaun.jpg');
new Product('Unicorn Meat', 'unicorn','../img/assets/unicorn.jpg');
new Product('Perpetual Watering Can', 'water-can','../img/assets/water-can.jpg');
new Product('Wine Glass With Hole', 'wine-glass','../img/assets/wine-glass.jpg');

pickThreeProducts();