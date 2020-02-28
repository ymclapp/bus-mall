'use strict';
// use strict is almost always the first line of our js files
console.log('It is working!');

var imageElements = document.getElementsByTagName('img');
var imageIndex1 = 0;
var imageIndex2 = 1;
var imageIndex3 = 2;
var totalClicks = 0;
var allImages=[];

function Product(name, imgUrl) {
    this.name = name;
    this.imgUrl = imgUrl;
    this.timesClicked = 0;
    this.totalShow = 0;
    allImages.push(this);
}

new Product('R2D2 Suitcase', 'img/bag.jpg');
new Product('Banana Chopper', 'img/banana.jpg');
new Product('Toilet Paper/Tablet Holder Combo', 'img/bathroom.jpg');
new Product('Open Toed Duck Boots', 'img/boots.jpg');
new Product('Breakfast Maker', 'img/breakfast.jpg');
new Product('Meatball Bubble Gum', 'img/bubblegum.jpg');
new Product('Hump Seat Chair', 'img/chair.jpg');
new Product('Alien Figurine', 'img/cthulhu.jpg');
new Product('Duck Mouth for Dog', 'img/dog-duck.jpg');
new Product('Dragon Meat', 'img/dragon.jpg');
new Product('Pen Utensil Set', 'img/pen.jpg');
new Product('Dust Boots', 'img/pet-sweep.jpg');
new Product('Pizza Scissors', 'img/scissors.jpg');
new Product('Shark Sleepingbag', 'img/shark.jpg');
new Product('Onesie Sweeper', 'img/sweep.png');
new Product('Tauntaun Sleepingbag', 'img/tauntaun.jpg');
new Product('Unicorn Meat', 'img/unicorn.jpg');
new Product('Octopus Tentacle USB', 'img/usb.gif');
new Product('Watering Can', 'img/water-can.jpg');
new Product('Smell The Bouquet Wine Glass', 'img/wine-glass.jpg');


function imageWasClicked(event) {

    console.log('an image was clicked');
    
totalClicks++;

       
if(event.srcElement.id === 'imageIndex1') {
    allImages[imageIndex1].timesClicked++;

} else if(event.srcElement.id === 'imageIndex2') {
    allImages[imageIndex2].timesClicked++;

} else if(event.srcElement.id === 'imageIndex3') {
    allImages[imageIndex3].timesClicked++; 
} 

var nextImageIndex1 = Math.floor(Math.random() * allImages.length);

while ((nextImageIndex1 === imageIndex1) || (nextImageIndex1 === imageIndex2) || (nextImageIndex1 === imageIndex3)) {
    nextImageIndex1 = Math.floor(Math.random() * allImages.length);
}
var nextImageIndex2 = Math.floor(Math.random() * allImages.length);
while ((nextImageIndex2 === imageIndex1) || (nextImageIndex2 === imageIndex2) || (nextImageIndex2 === imageIndex3) || (nextImageIndex2 === nextImageIndex1)) {
    nextImageIndex2 = Math.floor(Math.random() * allImages.length);
}
var nextImageIndex3 = Math.floor(Math.random() * allImages.length);
while ((nextImageIndex3 === imageIndex1) || (nextImageIndex3 === imageIndex2) || (nextImageIndex3 === imageIndex3) || (nextImageIndex3 === nextImageIndex1) || (nextImageIndex3 === nextImageIndex2)) {
    nextImageIndex3 = Math.floor(Math.random() * allImages.length);
}

imageIndex1 = nextImageIndex1;
imageIndex2 = nextImageIndex2;
imageIndex3 = nextImageIndex3;


// This is what is changing the images
imageElements[0].src = allImages[imageIndex1].imgUrl;
allImages[imageIndex1].totalShow++;
imageElements[1].src = allImages[imageIndex2].imgUrl;
allImages[imageIndex2].totalShow++;
imageElements[2].src = allImages[imageIndex3].imgUrl;
allImages[imageIndex3].totalShow++;

var clickHappy = 25;
if(totalClicks >= clickHappy) {
    var asideEl = document.getElementsByTagName('aside')[0];

    if(asideEl.firstElementChild) {
        asideEl.firstElementChild.remove();
    }
    if(totalClicks === clickHappy) {
        createResultsList();
        for (var j = 0; j < imageElements.length; j++) {
            imageElements[j].removeEventListener('click', imageWasClicked);
        }
    }
}





}

function createResultsList() {
      var createUL = document.getElementById('asideList');
    for (var i = 0; i < allImages.length; i++) {
        var createLI = document.createElement('li');
        createLI.textContent = allImages[i].name + ':  ' + allImages[i].timesClicked + ' vote(s) and was shown ' + allImages[i].totalShow + ' time(s).';
        createUL.appendChild(createLI);
    }
    
}

for (var i = 0; i < imageElements.length; i++) {
    imageElements[i].addEventListener('click', imageWasClicked);
}
// }