const buttonFoo = document.getElementById("buttonFoo");
const main = document.querySelector("main");
buttonFoo.addEventListener('click', responseToFoo)

function responseToFoo() {
    const h3Tag = document.createElement('h3');
    h3Tag.textContent = "Foo";
    main.appendChild(h3Tag);
}

const buttonBar = document.getElementById("buttonBar");
buttonBar.addEventListener('click', responseToBar)

function responseToBar() {
    
}