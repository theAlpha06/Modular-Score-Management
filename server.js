import express from 'express';
import mongoose from 'mongoose';
import playerRoutes from './routes/playerRoutes.js';

const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/modulePlayer', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then((res) => {
  console.log('Connected')
})
.catch((err) => {
  console.log(err);
})

app.use(express.json());

app.use('/', playerRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
