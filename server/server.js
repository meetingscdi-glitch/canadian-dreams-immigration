const express = require('express');
const dotenv = require('dotenv');
const { connectDb } = require('./config/db');
const routes = require('./routes/index');
dotenv.config();
const app = express();
var cors = require('cors')

app.use(express.json());
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

connectDb();
app.use(routes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
