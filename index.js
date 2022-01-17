import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(req.body);
})

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
