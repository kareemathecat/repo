const express = require('express');
const app = express();

app.get('/track', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const dest = req.query.dest;

  console.log(`IP Logged: ${ip} → ${dest}`);

  res.redirect(dest || '/');
});

app.get('/', (req, res) => {
  res.send('Tracking server is running.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
