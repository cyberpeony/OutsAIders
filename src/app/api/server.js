const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());


app.get('/publications', async (req, res) => {
    const publications = await prisma.publications.findMany();
    res.json(publications);
});

app.get('/publications/:id', async (req, res) => {
    const { id } = req.params;
    const publication = await prisma.publications.findUnique({ where: { id } });
    res.json(publication);
});

app.post('/publications', async (req, res) => {
    const newPublication = await prisma.publications.create({ data: req.body });
    res.json(newPublication);
});

app.put('/publications/:id', async (req, res) => {
    const { id } = req.params;
    const updatedPublication = await prisma.publications.update({
        where: { id },
        data: req.body,
    });
    res.json(updatedPublication);
});

app.delete('/publications/:id', async (req, res) => {
    const { id } = req.params;
    await prisma.publications.delete({ where: { id } });
    res.json({ message: 'Publication deleted' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
