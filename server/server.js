const express = require('express');
const config = require('./config');
const predictorRoutes = require('./routes/predictor');
const historyRoutes = require('./routes/history');
const logger = require('./utils/logger');

const app = express();

app.use(express.json());
app.use(logger);

app.use('/predict', predictorRoutes);
app.use('/history', historyRoutes);

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
