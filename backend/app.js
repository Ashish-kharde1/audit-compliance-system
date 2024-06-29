const express = require('express');
const bodyParser = require('body-parser');
const auditRoutes = require('./routes/auditRoutes');
const { connectDB } = require('./config/database');

const app = express();
app.use(bodyParser.json());

connectDB();

app.use('/api', auditRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
