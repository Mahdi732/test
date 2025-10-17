import express from 'express';
import bcrypt from 'bcrypt';

const app = express();

app.set('view engine', 'ejs');

app.get('/register', (req, res) => {
    res.render('register.ejs');
})
app.post('/register', (req,res)=>{
  const { name, email, password } = req.body;

  const existe = find(email);
  if (existe) return res.status(400).json({ message: 'user already existe'});

  const hashPassword = bcrypt.hash(password,10);
  const insertUser = insertUser(name, email, hashPassword);
});

app.post('/login', (req,res)=>{
  const { email, password } = req.body;

  const user = find(email);
  if (!user) return res.status(400).json({ message: 'this is not exist'});

  const valid = bcrypt.compare(user.password, password);
  if (!valid) return res.status(400).json({ message: 'password invalid'})

  
})

app.listen(3000)