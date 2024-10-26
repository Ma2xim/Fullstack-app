// frontend/src/App.js
import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState(''); // Створюємо змінну стану для зберігання повідомлення

  useEffect(() => {
    // Виконуємо запит до нашого бекенду
    fetch('http://localhost:5000/api/message')
      .then((response) => response.json()) // Перетворюємо відповідь у JSON
      .then((data) => setMessage(data.message)) // Зберігаємо отримане повідомлення у стані
      .catch((error) => console.error('Error fetching message:', error)); // Ловимо помилки, якщо є
  }, []);

  return (
    <div className="App">
      <h1>Frontend-Backend Demo</h1>
      <p>{message ? message : 'Loading...'}</p> {/* Виводимо повідомлення */}
    </div>
  );
}

export default App;
