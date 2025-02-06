<script>
    document.querySelector("form").addEventListener("submit", function(e) {
        e.preventDefault();  // Evitar el envío del formulario

        // Obtener los valores del formulario
        const sexo = document.querySelector("#sexo").value;
        const edad = parseInt(document.querySelector("#edad").value);
        const peso = parseFloat(document.querySelector("#peso").value);
        const altura = parseFloat(document.querySelector("#altura").value);
        const actividad = document.querySelector("#actividad").value;
        const objetivo = document.querySelector("#objetivo").value;
        const grasa = document.querySelector("#grasa").value;

        // Calcular TMB según Harris-Benedict
        let tmb;
        if (sexo === "masculino") {
            tmb = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * edad);
        } else {
            tmb = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * edad);
        }

        // Multiplicar por el factor de actividad
        let factorActividad;
        switch (actividad) {
            case "sedentario":
                factorActividad = 1.2;
                break;
            case "ligero":
                factorActividad = 1.375;
                break;
            case "moderado":
                factorActividad = 1.55;
                break;
            case "intenso":
                factorActividad = 1.725;
                break;
        }

        let calorias = tmb * factorActividad;

        // Cálculo de macros
        const proteinas = peso * 2; // 2g por kg de peso corporal
        const grasas = peso * 1;    // 1g por kg de peso corporal
        const carbohidratos = (calorias - (proteinas * 4 + grasas * 9)) / 4;

        // Crear el plan de entrenamiento personalizado
        let planEntrenamiento;
        switch (actividad) {
            case "sedentario":
                planEntrenamiento = "Plan recomendado: Caminatas suaves, estiramientos básicos.";
                break;
            case "ligero":
                planEntrenamiento = "Plan recomendado: Yoga, caminatas rápidas, ejercicios en casa.";
                break;
            case "moderado":
                planEntrenamiento = "Plan recomendado: Entrenamiento de fuerza, ejercicio cardiovascular moderado.";
                break;
            case "intenso":
                planEntrenamiento = "Plan recomendado: Entrenamiento de alta intensidad, pesas, HIIT.";
                break;
        }

        // Mostrar los resultados
        alert(`
            Calorías diarias: ${calorias.toFixed(0)} kcal
            Proteínas: ${proteinas} g
            Grasas: ${grasas} g
            Carbohidratos: ${carbohidratos.toFixed(0)} g

            Objetivo: ${objetivo}
            Plan de entrenamiento: ${planEntrenamiento}
        `);
    });
</script>
