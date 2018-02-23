
var pictureArray = [];

var shoppingCartList = [];



function picture(displayName, filePath) {
    this.displayName = displayName;
    this.filePath = filePath;
    this.price = 9.99
    pictureArray.push(this);
    
}

new picture('bag', 'img/bag.jpg')
new picture('banana', 'img/banana.jpg')
new picture('bathroom', 'img/bathroom.jpg')
new picture('boots', 'img/boots.jpg')
new picture('breakfast', 'img/breakfast.jpg')
new picture('bubblegum', 'img/bubblegum.jpg')
new picture('chair', 'img/bag.jpg')
new picture('cthulhu', 'img/cthulhu.jpg')
new picture('dog-duck', 'img/dog-duck.jpg')
new picture('dragon', 'img/dragon.jpg')
new picture('pen', 'img/pen.jpg')
new picture('pet-sweep', 'img/pet-sweep.jpg')
new picture('scissors', 'img/scissors.jpg')
new picture('shark', 'img/shark.jpg')
new picture('sweep', 'img/sweep.png')
new picture('tauntaun', 'img/tauntaun.jpg')
new picture('unicorn', 'img/unicorn.jpg')
new picture('usb', 'img/usb.gif')
new picture('water-can', 'img/water-can.jpg')
new picture('wine-glass', 'img/wine-glass.jpg')

// function
var save = function(){
    localStorage.setItem('shoppingcart', JSON.stringify(shopingCartList));
    console.log('sent shoping cart list' + localStorage)
}
document.getElementById("myForm").addEventListener("submit", myFunction);



function handleSubmit(event){
    console.log('form was submited sdfsdfd')

}
var products = document.getElementById('products');
document.getElementById('buyForm').addEventListener('submit', handleSubmit());
