let blue = document.getElementById('blue');
let black = document.getElementById('black');
let red = document.getElementById('red');
function change1() {
    let box = document.getElementById('box');
    box.style.backgroundColor = '#5ca1e1';
    box.style.transition = 'all 0.9s ease'
    box.style.scale = '0.6';
    box.style.textAlign = 'center'; // Centering the text
    box.innerText = '';
    box.style.color = 'white';
    box.style.fontSize = '33px';
    box.style.rotate = "90deg"
    box.style.boxShadow='4px 4px 10px purple'


}
function change2() {
    let box = document.getElementById('box');
    box.style.backgroundColor = 'black'
    box.style.transition = 'all 0.9s ease'
    box.style.scale = '0.9';
    box.style.textAlign = 'center'; 
    box.innerText = '';
    box.style.color = 'white';
    box.style.fontSize = '29px';
    box.style.rotate = '180deg'
}
function change3() {
    let box = document.getElementById('box');
    box.style.backgroundColor = 'red'
    box.style.transition = 'all 0.9s ease'
    box.style.scale = '0.5';
    box.style.rotate = '360deg'
    box.style.textAlign = 'center'; 
    box.innerText = '';
    box.style.color = 'white';
    box.style.fontSize = '50px';
}
function change4() {
    let box = document.getElementById('box');
    box.style.backgroundColor = 'white'
    box.style.transition = 'all 0.9s ease'
    // box.style.scale = '0.7';
    box.style.textAlign = 'center';
    box.innerText = 'Add color !!';
    box.style.color = 'black';
    box.style.fontSize = '48px';
    box.style.rotate = '0deg'
}