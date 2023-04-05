const express = require('express');
const bodyParse = require('body-parser');

const app = express();

app.use(bodyParse.json());

const rutas = (router)=>{
    router.get('/listado',(peticion,respuesta)=>{

        respuesta.json(
            [
                {
                    nombre: "angel",
                    apellido: "Francisco",
                    numero: "809-876-5665"
                },
                 {
                    nombre: "Juan",
                    apellido: "Domingo",
                    numero: "809-276-5665"
                },
                 {
                    nombre: "Pedro",
                    apellido: "Martinez",
                    numero: "809-276-5665"
                },
            ]
         )
    });

}

rutas(app);
app.listen(8080);