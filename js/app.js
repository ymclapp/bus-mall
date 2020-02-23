'use strict';
// use strict is almost always the first line of our js files
console.log('It is working!');

var imageElements = document.getElementsByTagName('img');

var image1 = 0;
var image2 = 1;
var image3 = 2;

var allImages=[];

function Image(name, imageUrl) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.timesClicked = 0;
    allImages.push(this);
}

new Image('R2D2 Suitcase', 'img/bag.jpg');
new Image('Banana Chopper', 'img/banana.jpg');
new Image('Toilet Paper/Tablet Holder Combo', 'img/bathroom.jpg');
new Image('Open Toed Duck Boots', 'img/boots.jpg');
new Image('Breakfast Maker', 'img/breakfast.jpg');
new Image('Meatball Bubble Gum', 'img/bubblegum.jpg');
new Image('Hump Seat Chair', 'img/chair.jpg');
new Image('Alien Figurine', 'img/cthulhu.jpg');
new Image('Duck Mouth for Dog', 'img/dog-duck.jpg');
new Image('Dragon Meat', 'img/dragon.jpg');
new Image('Pen Utensil Set', 'img/pen.jpg');
new Image('Dust Boots', 'img/pet-sweep.jpg');
new Image('Pizza Scissors', 'img/scissors.jpg');
new Image('Shark Sleepingbag', 'img/shark.jpg');
new Image('Onesie Sweeper', 'img/sweep.jpg');
new Image('Tauntaun Sleepingbag', 'img/tauntaun.jpg');
new Image('Unicorn Meat', 'img/unicorn.jpg');
new Image('Octopus Tentacle USB', 'img/usb.jpg');
new Image('Watering Can', 'img/water-can.jpg');
new Image('Smell The Bouquet Wine Glass', 'img/wine-glass.jpg');

var totalClicks = 0;

function imageWasClicked(event) {

    console.log('an image was clicked');
    totalClicks++;
    if(event.srcElement.id === '1') {
        allImages[image1].timesClicked++;
    } else if(event.srcElement.id === '2') {
        allImages[image2].timesClicked++;
    } else if(event.srcElement.id === '3') {
        allImages[image3].timesClicked++;
    } else if(event.srcElement.id === '4') {
        allImages[image4].timesClicked++;
    } else if(event.srcElement.id === '5') {
        allImages[imag5].timesClicked++;
    } else if(event.srcElement.id === '6') {
        allImages[image6].timesClicked++;
    } else if(event.srcElement.id === '7') {
        allImages[image7].timesClicked++;
    } else if(event.srcElement.id === '8') {
        allImages[image8].timesClicked++;
    } else if(event.srcElement.id === '9') {
        allImages[image9].timesClicked++;
    } else if(event.srcElement.id === '10') {
        allImages[image10].timesClicked++;
    } else if(event.srcElement.id === '11') {
        allImages[image11].timesClicked++;
    } else if(event.srcElement.id === '12') {
        allImages[image12].timesClicked++;
    } else if(event.srcElement.id === '13') {
        allImages[image13].timesClicked++;
    } else if(event.srcElement.id === '14') {
        allImages[image14].timesClicked++;
    } else if(event.srcElement.id === '15') {
        allImages[image15].timesClicked++;
    } else if(event.srcElement.id === '16') {
        allImages[image16].timesClicked++;
    } else if(event.srcElement.id === '17') {
        allImages[image17].timesClicked++;
    } else if(event.srcElement.id === '18') {
        allImages[image18].timesClicked++;
    } else if(event.srcElement.id === '19') {
        allImages[image19].timesClicked++;
    } else if(event.srcElement.id === '20') {
        allImages[image20].timesClicked++;
    } else
    console.log('It appears something weird happened.');
    
}

var nextImage1 = Math.floor(Math.random() * allImages.length);
while ((nextImage1 === image1) || (nextImage1 === image2) || (nextImage1 === image3)) {
    nextImage1 = Math.floor(Math.random() * allImages.length);
}

var nextImage2 = Math.floor(Math.random() * allImages.length);
while ((nextImage2 === image1) || (nextImage2 === image2) || (nextImage2 === image3) || (nextImage2 === nextImage1) || (nextImage2 === nextImage2) || (nextImage2 === nextImage3)) {
    nextImage2 = Math.floor(Math.random() * allImages.length);
}

var nextImage3 = Math.floor(Math.random() * allImages.length);
while ((nextImage3 === image1) || (nextImage3 === image2) || (nextImage3 === image3) || (nextImage3 === nextImage1) || (nextImage3 === nextImage2) || (nextImage3 === nextImage3)) {
    nextImage3 = Math.floor(Math.random() * allImages.length);
}

image1 = nextImage1;
image2 = nextImage2;
image3 = nextImage3;

imageElements[0].src = allImages[image1].imageUrl;
imageElements[1].src = allImages[image2].imageUrl;
imageElements[3].src = allImages[image3].imageUrl;

if(totalClicks >= 25) {
    var footerEl = document.getElementsByTagName('footer')[0];
    if(footerEl.firstElementChild) {
        footerEl.firstElementChild.remove();
    }

    var createPara = document.createElement('p');
    createPara.textContent = 'Thank you for voting!';
    footerEl.appendChild(createPara);
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