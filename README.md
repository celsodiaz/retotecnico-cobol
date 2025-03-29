
# 💼 Reto Técnico COBOL - CLI de Transacciones Bancarias

## 🧩 Introducción

Este proyecto es una solución al reto técnico de procesamiento de datos mediante una aplicación de línea de comandos (CLI) construida con Node.js.

El objetivo principal es leer un archivo CSV con transacciones bancarias y generar un reporte automatizado que permita:

- Calcular el balance total entre créditos y débitos (Créditos - Débitos).
- Identificar la transacción con el monto más alto.
- Contabilizar la cantidad de transacciones por tipo (Crédito y Débito).

Esta herramienta es útil para validar información financiera de forma rápida desde la terminal, sin necesidad de herramientas gráficas o complejas.

---

## ▶️ Instrucciones de Ejecución

### 1. Clonar el repositorio

```bash
git clone git@github.com:celsodiaz/retotecnico-cobol.git
cd retotecnico-cobol
```

### 2. Instalar dependencias (no necesarias en esta versión)

> Este proyecto no utiliza dependencias externas, por lo que no es necesario ejecutar `npm install`. Solo necesitas tener Node.js instalado.

### 3. Ejecutar la aplicación

Desde la terminal, usa el siguiente comando:

```bash
node index.js nombre-del-archivo.csv
```

Ejemplo:

```bash
node index.js transacciones.csv
```

---

## 🧠 Enfoque y Solución

La solución se basa en leer el archivo CSV línea por línea utilizando `fs.createReadStream` y `readline`. Se omite la primera línea (cabecera) y se procesan los datos de cada transacción. Las decisiones clave fueron:

- **Uso de `readline`**: permite leer archivos grandes línea por línea sin cargar todo en memoria.
- **Cálculos dinámicos**: se actualizan los totales de crédito y débito mientras se recorren las líneas.
- **Mayor transacción**: se guarda la transacción con el monto más alto durante el recorrido.
- **Validación de argumentos**: si no se pasa el nombre del archivo, la aplicación muestra un mensaje de error y finaliza con `process.exit(1)`.

---

## 📁 Estructura del Proyecto

```bash
retotecnico-cobol/
├── index.js             # Archivo principal con la lógica de procesamiento CSV y generación de reporte
├── transacciones.csv     # Archivo de ejemplo con datos de prueba
├── reporte-interbank.csv # Otro archivo de ejemplo para pruebas adicionales
└── README.md            # Documentación del proyecto
```
