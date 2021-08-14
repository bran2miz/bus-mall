'use strict';

let mainElem = document.getElementById('main');
let headElem = document.getElementById('div-one-header');
let imgElem = document.getElementById('div-img-one');
let divElem = document.getElementById('results');
let headElem2 = document.getElementById('div-two-header');
let imgElem2 = document.getElementById('div-img-two');
let headElem3 = document.getElementById('div-three-header');
let imgElem3 = document.getElementById('div-img-three');
let buttonElem = document.getElementById('button');
let counterVote = 0;
let leftContent = null;
let midContent = null;
let rightContent = null;

function Objectproduct(name, identifier, image) {
  this.name = name;
  this.productIdentifier = identifier;
  this.image = image;
  this.viewCounter = 0;
  this.theVotes = 0;

  Objectproduct.allProducts.push(this);
}

function allThreeProducts() {
  let leftContentIndex = Math.floor((Math.random() * Objectproduct.allProducts.length));
  leftProduct = Objectproduct.allProducts(leftContentIndex);

  let middleContentIndex = Math.floor((Math.random() * Objectproduct.allProducts.length));
  middleProduct = Objectproduct.allProducts(middleContentIndex);

  while (middleProduct === null || middleProduct === leftProduct) {
    let middleContentIndex = Math.floor((Math.random() * Objectproduct.allProducts.length));
    middleProduct = Objectproduct.allProducts[middleContentIndex];
  }

  let rightContentIndex = Math.floor((Math.random() * Objectproduct.allProducts.length));
  rightProduct = Objectproduct.allProducts(rightContentIndex);

  while (rightProduct === null || rightProduct === middleProduct || rightProduct === leftProduct)
}

