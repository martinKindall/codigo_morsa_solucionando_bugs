document.addEventListener("DOMContentLoaded", (event) => {

    document.getElementById("btn-guardar")
        .onclick = (() => {
            const resultado = unaFuncionDePrueba(2, 5);
            const input_nombre = document.getElementById("inp-nombre");
            const nombre = input_nombre.value;
            alert(`El nombre ${nombre} fue guardado!`);
            input_nombre.value = "";
        });
});

function unaFuncionDePrueba(num1, num2) {
    return num1 * num2;
}
