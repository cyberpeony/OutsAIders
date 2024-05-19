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
    try {
        const publications = await prisma.publications.findMany();
        res.json(publications);
    } catch (error) {
        console.error('Error fetching publications:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

/* traerlas al feed mediante un search bar? no tiene que implementarse 
app.get('/publications/:id', async (req, res) => {
    const { id } = req.params;
    const publication = await prisma.publications.findUnique({ where: { id } });
    res.json(publication);
});*/

// publicar un post
app.post('/publications', async (req, res) => {
    try {
        const newPublication = await prisma.publications.create({ data: req.body });
        res.json(newPublication);
    } catch (error) {
        console.error('Error creating publication:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// editar un post (also no tiene que ser implementado)
app.put('/publications/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedPublication = await prisma.publications.update({
            where: { id },
            data: req.body,
        });
        res.json(updatedPublication);
    } catch (error) {
        console.error('Error updating publication:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// borrar una publicación
app.delete('/publications/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.publications.delete({ where: { id } });
        res.json({ message: 'Publication deleted' });
    } catch (error) {
        console.error('Error deleting publication:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// ENDPOINTS PARA FINANCES
// para traer el "estado de cuenta" como widget a la interfaz principal 
app.get('/finances', async (req, res) => {
    try {
        const finances = await prisma.finances.findMany();
        res.json(finances);
    } catch (error) {
        console.error('Error fetching finances:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// para actualizar el número
// no hay delete porque se entiende que este dato nunca se borrará
// solo se podrá actualizar a 0s
app.put('/finances/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedFinances = await prisma.finances.update({
            where: { id },
            data: req.body,
        });
        res.json(updatedFinances);
    } catch (error) {
        console.error('Error updating finances:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// ENDPOINTS PARA PROMOTIONS
// traerlas al feed 
app.get('/promotions', async (req, res) => {
    try {
        const promotions = await prisma.promotions.findMany();
        res.json(promotions);
    } catch (error) {
        console.error('Error fetching promotions:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// publicar una promoción
app.post('/promotions', async (req, res) => {
    try {
        const newPromotion = await prisma.promotions.create({ data: req.body });
        res.json(newPromotion);
    } catch (error) {
        console.error('Error creating promotion:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// editar una promoción (also no tiene que ser implementado)
app.put('/promotions/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedPromotion = await prisma.promotions.update({
            where: { id },
            data: req.body,
        });
        res.json(updatedPromotion);
    } catch (error) {
        console.error('Error updating promotion:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// borrar una promoción
app.delete('/promotions/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.promotions.delete({ where: { id } });
        res.json({ message: 'Promotion deleted' });
    } catch (error) {
        console.error('Error deleting promotion:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// ENDPOINTS PARA USER
// get para traer el usuario al perfil 
app.get('/user', async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// post para crear un nuevo usuario 
app.post('/user', async (req, res) => {
    try {
        const newUser = await prisma.user.create({ data: req.body });
        res.json(newUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// put para editar los datos de un usuario 
app.put('/user/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await prisma.user.update({
            where: { id },
            data: req.body,
        });
        res.json(updatedUser);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// para conectar con el local host
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
