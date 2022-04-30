const express = require('express');
const app = express();
const handlebars = require('handlebars');

app.listen(3000, () => {
    console.log('El servidor se ha iniciado en el puerto 3000');
});


let carrito = [];
let qProductos = 0;

app.engine(
    "hbs",
    handlebars({
        extName: ".hbs",
        layoutsDir: __dirname + "/views",
        partialsDir: __dirname + "/views/componentes",
    })
);
//Middleware en el servidor
app.use(express.static("./assets"));
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist"));
app.use("/bootstrap", express.static(__dirname + "/node_modules/bootstrap/dist"));


//Paso 4: Crear la ruta raíz del servidor, como respuesta usaremos el método “render” del objeto response, el cual recibe los siguientes parámetros:
app.get("/", function(req, res) => {
    res.render("main", {
            layout: "main",
            productos: ["bananas", "cebollas", "pimenton", "papas", "lechuga", "tomate"]
        }
    })
});

//install npm install --save jquery
//npm install --save bootstrap