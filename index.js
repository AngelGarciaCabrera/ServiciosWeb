const express = require('express');
const bodyParse = require('body-parser');

const app = express();

app.use(bodyParse.json());

const contactos = []

const rutas = (router) => {
    router.get('/listado', async (peticion, respuesta) => {

        respuesta.json(contactos)
    });

    router.post('/contactos/agregar', async (peticion, respuesta) => {
        const contact = respuesta.body;
        contactos.push(contact);
        respuesta.json('Contacto agregado exitosamente.')
    })

}

rutas(app);
app.listen(8080);