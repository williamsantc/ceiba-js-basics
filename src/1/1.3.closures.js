/* Lexical Scope & Closures */

function sumador() {

    var value = 0;

    function aumentar() {
        value++;
    }

    function add(nuevoValor) {
        value += nuevoValor;
    }

    function verValor() {
        console.log(`el valor es: ${value}`)
    }

    return { aumentar, add, verValor }
}

const sum = sumador();

sum.aumentar()
sum.add(2);

 sum.verValor()