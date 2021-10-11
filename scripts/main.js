const myHeading = document.querySelector('h1')
myHeading.textContent = 'Hello World'
document.querySelector('h1').onclick = function() {
    alert('Ouch! Stop poking me!');
}