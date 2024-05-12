let blue = document.getElementById('blue');
let black = document.getElementById('black');
let red = document.getElementById('red');
function change1() {
    let box = document.getElementById('box');
    box.style.backgroundColor = '#5ca1e1';
    box.style.transition = 'all 0.9s ease'
    box.style.scale = '1.2';
    box.style.textAlign = 'center'; // Centering the text
    box.innerText = 'Hello I\'m Blue !';
    box.style.color = 'white';
    box.style.fontSize = '33px';
    
    
    
}
function change2() {
    let box = document.getElementById('box');
    box.style.backgroundColor = 'black'
    box.style.transition = 'all 0.9s ease'
    box.style.scale = '0.9';
    box.style.textAlign = 'center'; // Centering the text
    box.innerText = 'Hello I\'m Black !';
    box.style.color = 'white';
    box.style.fontSize = '29px';
}
function change3() {
    let box = document.getElementById('box');
    box.style.backgroundColor = 'red'
    box.style.transition = 'all 0.9s ease'
    box.style.scale = '0.5';
    box.style.textAlign = 'center'; // Centering the text
    box.innerText = 'Hello I\'m Red !';
    box.style.color = 'white';
    box.style.fontSize = '50px';
}
function change4(){
    let box = document.getElementById('box');
    box.style.backgroundColor = 'white'
    box.style.transition = 'all 0.4s ease'
    // box.style.scale = '0.7';
    box.style.textAlign = 'center'; // Centering the text
    box.innerText = 'Add color !!';
    box.style.color = 'black';
    box.style.fontSize = '48px';
}