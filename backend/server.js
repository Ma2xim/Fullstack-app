// backend/server.js
const express = require('express'); // Імпортуємо бібліотеку Express
const cors = require('cors'); // Імпортуємо бібліотеку CORS для доступу фронтенду
const app = express(); // Створюємо сервер
const PORT = 5000; // Вказуємо порт, на якому буде працювати сервер

app.use(cors()); // Дозволяємо доступ з фронтенду до бекенду

// Створюємо API, яке повертає повідомлення
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// Запускаємо сервер на порту 5000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
