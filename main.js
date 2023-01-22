const form = document.getElementById('form-formulario');
const campoA = document.getElementById('campo-A');
const campoB = document.getElementById('campo-B');

form.addEventListener('submit', function(e) {
    e.preventDefault();

const campoA = document.getElementById("campo-A").value;
const campoB = document.getElementById("campo-B").value;

    if (!campoA<campoB) {
        alert("B não é maior que A")
    } else {
        alert("Tudo certo")
    }
})

console.log(form);