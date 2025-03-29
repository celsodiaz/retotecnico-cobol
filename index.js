const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Obtener el nombre del archivo desde los argumentos de la terminal
const archivoArgumento = process.argv[2];

if (!archivoArgumento) {
    console.error("❌ Debes proporcionar el nombre del archivo CSV como argumento.");
    console.error("Ejemplo: node index.js transacciones.csv");
    process.exit(1);
}

// guardamos la ruta al archivo CSV
const archivoCSV = path.join(__dirname, archivoArgumento);

async function procesarCSV(rutaArchivo) {
    const stream = fs.createReadStream(rutaArchivo)
    const rl = readline.createInterface({ input: stream })

    let creditos = 0;
    let debitos = 0;
    let conteoCreditos = 0;
    let conteoDebitos = 0;
    let transaccionMayor = { id: null, monto: 0 };

    //variable para saltar la primera linea del archivo csv
    isFirstLine = true;

    for await (const linea of rl ) {
        if (isFirstLine) {
            isFirstLine = false;
            continue; 
        }

        const [id, tipo, montoStr] = linea.split(",");
        const monto = parseFloat(montoStr);

        if (tipo === "Crédito") {
        creditos += monto;
        conteoCreditos++;
        } else if (tipo === "Débito") {
        debitos += monto;
        conteoDebitos++;
        }

        if (monto > transaccionMayor.monto) {
        transaccionMayor = { id, monto };
        }
    }

    const balance = creditos - debitos;

    const { id , monto} = transaccionMayor;

     // Mostrar en la consola el reporte (CLI)
    console.log("\nReporte de Transacciones");
    console.log("---------------------------------------------");
    console.log(`Balance Final: ${balance.toFixed(2)}`);
    console.log(`Transacción de Mayor Monto: ID ${id} - ${monto.toFixed(2)}`);
    console.log(`Conteo de Transacciones: Crédito: ${conteoCreditos} Débito: ${conteoDebitos}\n`);

}

procesarCSV(archivoCSV).catch((error) => {
    console.error("Error al procesar el archivo: ", error);
});