const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join('public', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join('public', 'build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
