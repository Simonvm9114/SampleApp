const express = require('express');
const axios = require('axios');

app = express();
app.use(express.json());

const isAuthenticated = (req, res, next) => {
  req.user = {};
  next();
};

app.use(isAuthenticated);

app.get('/', (req, res) => {
  axios.get('http://localhost:3000/isauthenticated').then(({ data }) => {
    console.log(data);
    res.send(data);
  });
});

app.get('/login', (req, res) => {
  res.redirect('http://localhost:3000/auth/google');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
