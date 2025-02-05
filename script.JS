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
const objetivo = document.getElementById('objetivo');
const formularioPersonalizado = document.getElementById('formularioPersonalizado');

objetivo.addEventListener('change', function() {
    const seleccion = objetivo.value;
    formularioPersonalizado.innerHTML = ''; // Limpiar los campos previos

    if (seleccion === 'bajar') {
        formularioPersonalizado.innerHTML = `
            <label for="peso">Peso actual (kg):</label>
            <input type="number" id="peso" name="peso" required>

            <label for="altura">Altura (cm):</label>
            <input type="number" id="altura" name="altura" required>

            <label for="deporte">¿Qué deporte realizas?</label>
            <input type="text" id="deporte" name="deporte">

            <label for="intolerancias">¿Tienes alguna intolerancia alimentaria?</label>
            <input type="text" id="intolerancias" name="intolerancias">
        `;
    } else if (seleccion === 'ganar') {
        formularioPersonalizado.innerHTML = `
            <label for="peso">Peso actual (kg):</label>
            <input type="number" id="peso" name="peso" required>

            <label for="edad">Edad:</label>
            <input type="number" id="edad" name="edad" required>

            <label for="alturag">Altura (cm):</label>
            <input type="number" id="alturag" name="alturag" required>

            <label for="deporte">¿Qué deporte realizas?</label>
            <input type="text" id="deporte" name="deporte">
        `;
    } else {
        formularioPersonalizado.innerHTML = `
            <label for="peso">Peso actual (kg):</label>
            <input type="number" id="peso" name="peso" required>

            <label for="alturag">Altura (cm):</label>
            <input type="number" id="alturag" name="alturag" required>
        `;
    }
});
