const form = document.getElementById('form-formulario');
const campoA = document.getElementById('campo-A');
const campoB = document.getElementById('campo-B');

form.addEventListener('submit', function(e) {
    e.preventDefault();

let numA = document.getElementById("campo-A").valueAsNumber;
let numB = document.getElementById("campo-B").valueAsNumber;

    if (!(numA<numB)) {
        alert("B não é maior que A")
    } else {
        alert("Tudo certo")
    }
})

console.log(form);