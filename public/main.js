document.addEventListener("DOMContentLoaded", (event) => {

    document.getElementById("btn-guardar")
        .onclick = (() => {
            const input_nombre = document.getElementById("inp-nombre");
            const nombre = input_nombre.value;
            alert(`El nombre ${nombre} fue guardado!`);
            input_nombre.value = "";
        });
});
