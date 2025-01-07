const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const data = require('./db.json');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/destination', (req, res) => {
    res.json(data.destination);
});

app.get('/hotels', (req, res) => {
    res.json(data.hotels);
});

app.post('/hotels', (req, res) => {
    const { city } = req.body;
    const hotels = data.hotels.filter((hotel) => hotel.city === city);
    res.json(hotels);
});

app.get('/hotels/:id', (req, res) => {
  const { id } = req.params;
  const hotel = data.hotels.find((hotel) => hotel.id === parseInt(id, 10));

  if (hotel) {
    res.json(hotel);
  } else {
    res.status(404).json({ message: 'Hotel not found' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
