const express = require('express');

app = express();
app.use(express.json());

const isAuthenticated = (req, res, next) => {
  req.user = {};
  next();
};

app.use(isAuthenticated);

app.get('/', (req, res) => {
  console.log(req.user);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
