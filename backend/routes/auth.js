const express = require('express');
const router = express.Router();
const User = require('../models/user');
router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: 'Usuario registrado', user });
  } catch (error) {
    res.status(400).json({ message: 'Error al registrar usuario', error });
  }
});
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username, password });
    if (!user) return res.status(401).json({ message: 'Credenciales inválidas' });
    res.json({ message: 'Login exitoso', username });
  } catch (error) {
    res.status(400).json({ message: 'Error al iniciar sesión', error });
  }
});
module.exports = router;
