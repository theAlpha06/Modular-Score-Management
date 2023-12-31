import express from 'express';
import mongoose from 'mongoose';
import playerRoutes from './routes/playerRoutes.js';

const app = express();
const mongoURI = 'mongodb+srv://thealpha06:thealpha06@cluster0.6xsrrev.mongodb.net/moduleplayer';
// const mongoURI = 'mongodb://localhost:27017/modulePlayer';

mongoose.connect(mongoURI, {
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
