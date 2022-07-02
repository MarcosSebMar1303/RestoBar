const frm = document.querySelector("#frm");

frm.addEventListener("submit", event => {
    event.preventDefault();
    const frm = event.target;
    const formData = {
        nombre: frm.nombre.value,
        pedido: frm.pedido.value,
        direccion: frm.direccion.value,
        barrio: frm.barrio.value
    };

    const URL = `https://api.whatsapp.com/send?phone=5493704238835&text=Hola. Mi nombre es: ${formData.nombre}.
        + Quiero: ${formData.pedido}.
        + Mi dirección es: ${formData.direccion}.
        + Barrio: ${formData.barrio}.
        %20%20%20%20Muchas Gracias%20&source=&data=`;

    window.open(URL, "_blank");
});