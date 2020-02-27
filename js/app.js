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
new Product('Onesie Sweeper', 'img/sweep.jpg');
new Product('Tauntaun Sleepingbag', 'img/tauntaun.jpg');
new Product('Unicorn Meat', 'img/unicorn.jpg');
new Product('Octopus Tentacle USB', 'img/usb.jpg');
new Product('Watering Can', 'img/water-can.jpg');
new Product('Smell The Bouquet Wine Glass', 'img/wine-glass.jpg');

function imageWasClicked(event) {

    console.log('an image was clicked');
    
    totalClicks++;
    
    if(event.srcElement.id === '1') {
        allImages[imageIndex1].timesClicked++;
    } else if(event.srcElement.id === '2') {
        allImages[imageIndex2].timesClicked++;
    } 
    // else if(event.srcElement.id === '3') {
    //     allImages[imageIndex3].timesClicked++;
    // } else if(event.srcElement.id === '4') {
    //     allImages[imageIndex4].timesClicked++;
    // } else if(event.srcElement.id === '5') {
    //     allImages[imagIndex5].timesClicked++;
    // } else if(event.srcElement.id === '6') {
    //     allImages[imageIndex6].timesClicked++;
    // } else if(event.srcElement.id === '7') {
    //     allImages[imageIndex7].timesClicked++;
    // } else if(event.srcElement.id === '8') {
    //     allImages[imageIndex8].timesClicked++;
    // } else if(event.srcElement.id === '9') {
    //     allImages[imageIndex9].timesClicked++;
    // } else if(event.srcElement.id === '10') {
    //     allImages[imageIndex10].timesClicked++;
    // } else if(event.srcElement.id === '11') {
    //     allImages[imageIndex11].timesClicked++;
    // } else if(event.srcElement.id === '12') {
    //     allImages[imageIndex12].timesClicked++;
    // } else if(event.srcElement.id === '13') {
    //     allImages[imageIndex13].timesClicked++;
    // } else if(event.srcElement.id === '14') {
    //     allImages[imageIndex14].timesClicked++;
    // } else if(event.srcElement.id === '15') {
    //     allImages[imageIndex15].timesClicked++;
    // } else if(event.srcElement.id === '16') {
    //     allImages[imageIndex16].timesClicked++;
    // } else if(event.srcElement.id === '17') {
    //     allImages[imageIndex17].timesClicked++;
    // } else if(event.srcElement.id === '18') {
    //     allImages[imageIndex18].timesClicked++;
    // } else if(event.srcElement.id === '19') {
    //     allImages[imageIndex19].timesClicked++;
    // } else if(event.srcElement.id === '20') {
        // allImages[image20].timesClicked++;
    else {
        allImages[imageIndex3].timesClicked++
    }
    console.log('It appears something weird happened.');
    
}

var nextImageIndex1 = Math.floor(Math.random() * allImages.length);
while ((nextImageIndex1 === imageIndex1) || (nextImageIndex1 === image2) || (nextImageIndex1 === imageIndex3)) {
    nextImageIndex1 = Math.floor(Math.random() * allImages.length);
}

var nextImageIndex2 = Math.floor(Math.random() * allImages.length);
while ((nextImageIndex2 === imageIndex1) || (nextImageIndex2 === imageIndex2) || (nextImageIndex2 === imageIndex3) || (nextImageIndex2 === nextImageIndex1) || (nextImageIndex2 === nextImageIndex2) || (nextImageIndex2 === nextImageIndex3)) {
    nextImageIndex2 = Math.floor(Math.random() * allImages.length);
}

var nextImage3 = Math.floor(Math.random() * allImages.length);
while ((nextImageIndex3 === imageIndex1) || (nextImageIndex3 === imageIndex2) || (nextImageIndex3 === imageIndex3) || (nextImageIndex3 === nextImageIndex1) || (nextImageIndex3 === nextImageIndex2) || (nextImageIndex3 === nextImageIndex3)) {
    nextImage3 = Math.floor(Math.random() * allImages.length);
}

imageIndex1 = nextImageIndex1;
// allImages[imageIndex1]
imageIndex2 = nextImageIndex2;
imageIndex3 = nextImageIndex3;

imageElements[0].src = allImages[imageIndex1].imageUrl;
imageElements[1].src = allImages[imageIndex2].imageUrl;
imageElements[2].src = allImages[imageIndex3].imageUrl;

if(totalClicks <= 25) {
    var asideEl = document.getElementsByTagName('aside')[0];
    if(asideEl.firstElementChild) {
        asideEl.firstElementChild.remove();
    }

    var createPara = document.createElement('p');
    createPara.textContent = 'Thank you for voting!';
    asideEl.appendChild(createPara);
}

for (var i = 0; i < imageElements.length; i++) {
    imageElements[i].addEventListener('click', imageWasClicked);
}




// var ul = document.createElement('ul');
// article.appendChild(ul);
// for(var i = 0; i < petOne.interests.length; i++){
//     //Create li
//     var li = document.createElement('li');
//     //Fill the lists
//     li.textContent = petOne.interests[i];
//     ul.appendChild(li);
// }