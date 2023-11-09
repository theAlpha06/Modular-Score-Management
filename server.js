import express from 'express';
import mongoose from 'mongoose';

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
