import express from 'express';
import mongoose from 'mongoose';
import playerRoutes from './routes/playerRoutes.js';

const app = express();
mongoose.connect('mongodb+srv://ravidemo3:ustime123@cluster0.6f3zkxn.mongodb.net/modularPlayer', {
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
