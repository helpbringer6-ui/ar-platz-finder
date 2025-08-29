const mongoose = require('mongoose');

const ParkplatzSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, required: true },
});

module.exports = mongoose.model('Parkplatz', ParkplatzSchema);