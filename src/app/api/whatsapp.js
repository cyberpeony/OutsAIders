import { twiml } from 'twilio';
import { Pool } from 'pg';

const pool = new Pool({
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  ssl: { rejectUnauthorized: false }
});

export default async function handler(req, res) {
  const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

  const messageBody = req.body.Body;
  const fromNumber = req.body.From;

  try {
    const match = messageBody.match(/^(gasto|abono|deposito)\s+(\d+(?:\.\d+)?)/i);
    if (match) {
      const transactionType = match[1].toLowerCase();
      const amount = parseFloat(match[2]);

      let userId = await findOrCreateUser(fromNumber, pool);

      await registerTransaction(userId, transactionType, amount, pool);

      const message = `Se ha registrado un ${transactionType} de ${amount} pesos.`;

      res.writeHead(200, { 'Content-Type': 'text/xml' });
      res.end(twilioClient.messages.create({
        body: message,
        from: 'whatsapp:+14155238886', // Reemplaza con tu número de Twilio
        to: fromNumber
      }).toString());
    } else {
      // Mensaje de error si el comando no es válido
      res.writeHead(200, { 'Content-Type': 'text/xml' });
      res.end(twilioClient.messages.create({
        body: 'Por favor, ingresa un comando válido. Ejemplo: "gasto 100"',
        from: 'whatsapp:+14155238886', // Reemplaza con tu número de Twilio
        to: fromNumber
      }).toString());
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
}

// Encuentra un usuario por número de teléfono o crea uno nuevo
async function findOrCreateUser(phoneNumber, pool) {
  try {
    const result = await pool.query('SELECT id_usuario FROM Usuarios WHERE telefono = $1', [phoneNumber]);
    if (result.rows.length > 0) {
      return result.rows[0].id_usuario;
    } else {
      const newResult = await pool.query(
        'INSERT INTO Usuarios (telefono, nombre) VALUES ($1, $2) RETURNING id_usuario', 
        [phoneNumber, 'Nuevo Usuario']
      );
      return newResult.rows[0].id_usuario;
    }
  } catch (error) {
    throw error;
  }
}

// Registra la transacción en la base de datos
async function registerTransaction(userId, type, amount, pool) {
  try {
    await pool.query('INSERT INTO Finanzas (id_usuario, tipo_finanza, monto, fecha_finanza) VALUES ($1, $2, $3, NOW())', [userId, type, amount]);
  } catch (error) {
    throw error;
  }
}