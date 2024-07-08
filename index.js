const express = require('express');
const cors = require('cors');

const productsRoutes = require('./src/routes/productsRoutes');
const instructorsRoutes = require('./src/routes/instructorsRoutes');
const loginRoutes = require('./src/routes/loginRoutes');

const { verifyToken } = require('./src/controllers/loginController');

const app = express();

app.use(express.json());

// const corsOptions = {
//     origin: ['http://localhost:5500', 'http://midominio.com'], // Agrega aquí los dominios permitidos
//     optionsSuccessStatus: 200 // Para navegadores legacy (IE11, varios SmartTVs)
// };

app.use(cors());


app.use('/products', productsRoutes);
app.use('/instructors', instructorsRoutes);
app.use('/login', loginRoutes);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res)=> {
    const htmlResponse =`
        <html>
            <head>
                <title>Atlas Gym</title>
            </head>
            <body>
                <h1>Bienvenido a la API de Atlas Gym</h1>
            </body> 
        </html>`
        ;
    res.send(htmlResponse);
});

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));