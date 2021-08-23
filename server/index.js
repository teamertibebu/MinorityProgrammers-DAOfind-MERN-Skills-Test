const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  console.log(err ? err : `http://localhost:${PORT}`);
});
