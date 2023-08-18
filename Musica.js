const reproductorAudio = document.getElementById("reproductorAudio");
const listaCanciones = document.getElementById("listaCanciones");
const itemsLista = listaCanciones.getElementsByTagName("li");

for (const item of itemsLista) {
    item.addEventListener("click", function () {
        const srcCancion = item.getAttribute("data-src");
        reproductorAudio.src = srcCancion;
        reproductorAudio.play();
    });
}