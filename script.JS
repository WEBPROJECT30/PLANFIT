document.getElementById("diet-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const objetivo = document.getElementById("objetivo").value;
    
    if (nombre && email && objetivo) {
        alert("¡Registro exitoso! Recibirás tu plan en tu correo electrónico.");
        document.getElementById("diet-form").reset();
    } else {
        alert("Por favor, completa todos los campos.");
    }
});

document.getElementById("btn-pago").addEventListener("click", function() {
    window.location.href = "https://www.paypal.com/paypalme/tuusuario/19.99";
});
