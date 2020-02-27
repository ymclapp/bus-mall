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
new Product('Onesie Sweeper', 'img/sweep.png');
new Product('Tauntaun Sleepingbag', 'img/tauntaun.jpg');
new Product('Unicorn Meat', 'img/unicorn.jpg');
new Product('Octopus Tentacle USB', 'img/usb.gif');
new Product('Watering Can', 'img/water-can.jpg');
new Product('Smell The Bouquet Wine Glass', 'img/wine-glass.jpg');

allImages[imageIndex1].totalshow++;
allImages[imageIndex2].totalshow++;
allImages[imageIndex3].totalshow++;

function imageWasClicked(event) {

    console.log('an image was clicked');
    
    totalClicks++;

    console.log(event.srcElement.id);
    
    if(event.srcElement.id === 'image1') {
        allImages[imageIndex1].timesClicked++;
    } else if(event.srcElement.id === 'image2') {
        allImages[imageIndex2].timesClicked++;
    } 
    else if(event.srcElement.id === 'image3') {
        allImages[imageIndex3].timesClicked++; 
    } else {
        console.log('It appears something weird happened.');
    }

    
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
// allImages[imageIndex1].totalshow++;
imageIndex2 = nextImageIndex2;
// allImages[imageIndex2].totalshow++;
imageIndex3 = nextImageIndex3;
// allImages[imageIndex3].totalshow++;



// [put in image clicked]

if(totalClicks >= 25) {
    var asideEl = document.getElementsByTagName('aside')[0];
    if(asideEl.firstElementChild) {
        asideEl.firstElementChild.remove();
    }

    var createUL = document.createElement('ul');
    for (var i=0; i < allImages.length; i++) {
        var createLI = document.createElement('li');
        createLI.textContent = allImages[i].name + ' had' + allImages[i].timesClicked + ' votes and was shown ' + allImages[i].totalShow + ' times.';
        createUL.appendChild(createLI);
    }
   
    // createPara.textContent = 'Thank you for voting!';
    // asideEl.appendChild(createUL);
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