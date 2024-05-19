const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());


// ENDPOINTS PARA PUBLICATIONS 
// traerlas al feed 
app.get('/publications', async (req, res) => {
    const publications = await prisma.publications.findMany();
    res.json(publications);
});

/* traerlas al feed mediante un search bar? no tiene que implementarse 
app.get('/publications/:id', async (req, res) => {
    const { id } = req.params;
    const publication = await prisma.publications.findUnique({ where: { id } });
    res.json(publication);
});*/

// publicar un post
app.post('/publications', async (req, res) => {
    const newPublication = await prisma.publications.create({ data: req.body });
    res.json(newPublication);
});

// editar un post (also no tiene que ser implementado)
app.put('/publications/:id', async (req, res) => {
    const { id } = req.params;
    const updatedPublication = await prisma.publications.update({
        where: { id },
        data: req.body,
    });
    res.json(updatedPublication);
});


// borrar una publicación
app.delete('/publications/:id', async (req, res) => {
    const { id } = req.params;
    await prisma.publications.delete({ where: { id } });
    res.json({ message: 'Publication deleted' });
});


// ENDPOINTS PARA FINANCES
// para traer el "estado de cuenta" como widget a la interfaz principal 
app.get('/finances', async (req, res) => {
    const finances = await prisma.finances.findMany();
    res.json(finances);
});

// para actualizar el número
// no hay delete porque se entiende que este dato nunca se borrará
// solo se podrá actualizar a 0s
app.put('/finances/:id', async (req, res) => {
    const { id } = req.params;
    const updatedFinances = await prisma.finances.update({
        where: { id },
        data: req.body,
    });
    res.json(updatedFinances);
});


// ENDPOINTS PARA PROMOTIONS
// traerlas al feed 
app.get('/promotions', async (req, res) => {
    const promotions = await prisma.promotions.findMany();
    res.json(promotions);
});

// publicar una promoción
app.post('/promotions', async (req, res) => {
    const newPromotion = await prisma.promotions.create({ data: req.body });
    res.json(newPromotion);
});

// editar una promoción (also no tiene que ser implementado)
app.put('/promotions/:id', async (req, res) => {
    const { id } = req.params;
    const updatedPromotion = await prisma.promotions.update({
        where: { id },
        data: req.body,
    });
    res.json(updatedPromotion);
});


// borrar una promoción
app.delete('/promotions/:id', async (req, res) => {
    const { id } = req.params;
    await prisma.publications.delete({ where: { id } });
    res.json({ message: 'Publication deleted' });
});





// ENDPOINTS PARA USER






// para conectar con el local host
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
