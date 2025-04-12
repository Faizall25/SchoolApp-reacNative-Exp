const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sekolahRoutes = require('./routes/sekolah');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/sekolah', sekolahRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
