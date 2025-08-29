const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// MongoDB Verbindung
mongoose.connect('mongodb://localhost:27017/parkplatzfinder', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB verbunden'))
  .catch(err => console.log(err));

// API-Endpunkt
app.get('/api/parkplaetze', (req, res) => {
  // Hier sollte die Logik für die Rückgabe von Parkplatzdaten sein
  res.json([{ id: 1, name: 'Platz A', status: 'Verfügbar' }, { id: 2, name: 'Platz B', status: 'Belegt' }]);
});

app.listen(PORT, () => {
  console.log(`Server lauscht auf Port ${PORT}`);
});