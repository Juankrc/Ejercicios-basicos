/* 
Crear un programa que simule una calculadora básica, permitiendo al usuario elegir la operación a 
realizar. La ruta debe ser /calculadora y debe recibir los parámetros operando1, operando2 y operacion.
*/

const express = require('express'); // Importa express
const app = express();      // Crea una instancia de express
const port = 2000;          // Establece el puerto 2000

// Lógica
app.get(`/calculadora`, (req, res) =>{
    const operacion = req.query.operacion;
    // ReferenceError: operacion is not defined
    const operando1 = parseInt(req.params.operando1);
    const operando2 = parseInt(req.params.operando2);

    if(isNaN(operando1) || isNaN(operando2)) {
        return res.status(400).json({ error: 'Los operandos deben ser números válidos.' });
    }

    let resultado


    switch(operacion){
        case 'sumar':
            resultado = operando1 + operando2;
            break;
    
        case 'restar':
            resultado = operando1 - operando2;
            break;
    
        case 'multiplicar':
            resultado = operando1 * operando2;
            break;
    
        case 'dividir':
            if(operando2 === 0){
                return res.status(400).send('No se puede dividir por cero');
            }
            resultado = operando1/operando2;;
            break;
        default:
            return res.status(400).send('Operación no válida');
        }        
        res.send(`El resultado es de la ${operacion} es: ${resultado}`);
})
    
    // Iniciar el servidor, escuchando en el puerto 3000
app.listen(port, ()=>{
    console.log(`Servidor escuchando en el puerto ${port}`);
});
/*
 Revisar y adaptar ejercicio Unidad 5, 05_calculadora.js y adaptar las rutas.
*/


