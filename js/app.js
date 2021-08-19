'use strict';

// global variables -----------------------------------------------------------
let allProducts = [];
// querySelector = method
let myContainer = document.querySelector('section');
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.querySelector('section img:nth-child(3)');
let clicks = 0;
let clicksAllowed = 25;
let indexArray = [];
let uniqueNumberOfIndexes= 6;

// constructor
function Products(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `img/assets/${name}.${fileExtension}`;
  this.views = 0;
  this.clicks = 0;
  allProducts.push(this);
}
function selectRandomProduct() {
  return Math.floor(Math.random() * allProducts.length);
}

function renderProducts() {
  // call the selectRandomProduct
  while(indexArray.length < uniqueNumberOfIndexes) {
    let randomNumber = selectRandomProduct();
    if (!indexArray.includes(randomNumber)){
      indexArray.push(randomNumber);
    }
  }

  let prod1 = indexArray.shift();
  let prod2 = indexArray.shift();
  let prod3 = indexArray.shift();
  // push product values into array
  // google MDN array has value
  // while  (prod1 === prod2 || prod1 === prod3 || prod2 === prod3) {
  //   prod2 = selectRandomProduct();
  //   prod3 = selectRandomProduct();
  // }
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
    
    myContainer.removeEventListener('click', handleProductClick);
    renderChart();
  }
}
// function renderResults() {
//   let ul = document.querySelector('ul');
//   for (let i = 0; i < allProducts.length; i++) {
//     let li = document.createElement('li')
//     li.textContent = `${allProducts[i].name} had ${allProducts[i].views} view and was clicked ${allProducts[i].clicks} times.`;
//     ul.appendChild(li);
//   }
// }

new Products ('bag');
new Products ('banana');
new Products ('bathroom');
new Products ('boots');
new Products ('breakfast');
new Products ('bubblegum');
new Products ('chair');
new Products ('cthulhu');
new Products ('dog-duck');
new Products ('dragon');
new Products ('pen');
new Products ('pet-sweep');
new Products ('scissors');
new Products ('shark');
new Products ('sweep', 'png');
new Products ('tauntaun');
new Products ('unicorn');
new Products ('water-can');
new Products ('wine-glass');

console.log(allProducts);
renderProducts();

function renderChart() {
  let numClicks = [];
  let numViews = [];
  let numNames = [];
  for (let i = 0; i < allProducts.length; i++) {
    numNames.push(allProducts[i].name);
    numClicks.push(allProducts[i].clicks);
    numViews.push(allProducts[i].views);
  }
  //console.log(goatClicks);
  let chartObject = {
    type: 'bar',
    data: {
      labels: numNames,
      datasets: [{
        label: 'Number of Views',
        data: numViews,
        backgroundColor: '#5F9EA0',
        borderColor: '#008B8B',
        borderWidth: 1
      },
      {
        label: 'Number of Clicks',
        data: numClicks,
        backgroundColor: '#2F4F4F',
        borderColor: '#8FBC8F',
        borderWidth: 1
      }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };
  let ctx = document.getElementById('productChart').getContext('2d');
  let myChart = new Chart(ctx, chartObject);
}



myContainer.addEventListener('click', handleProductClick);
// myButton.addEventListener('click', renderResults);

