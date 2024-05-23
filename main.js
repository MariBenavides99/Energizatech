document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Muestra una alerta
    alert("¡Tu mensaje fue enviado con éxito!");
    // Aquí podrías agregar el código para enviar los datos del formulario a un servidor si lo deseas.
});