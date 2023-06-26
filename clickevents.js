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
    const h3Tag = document.createElement('h3');
    h3Tag.textContent = "Bar";
    main.appendChild(h3Tag);
}

const buttonFooBar = document.getElementById("buttonFooBar");
buttonFooBar.addEventListener('click', responseToFooBar)

function responseToFooBar() {
    const h2Tag = document.createElement('h2');
    h2Tag.textContent = "FooBar";
    main.appendChild(h2Tag);
}