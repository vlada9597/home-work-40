# React Forms & Data Fetching (Home-work-40)

Цей проєкт демонструє використання **Controlled Component**, **Uncontrolled Component** та **запиту до сервера** в React.

## 📌 Що реалізовано
1. **ControlledForm** – форма, яка повністю контролюється через `useState`.  
   - Поле вводу тексту  
   - Чекбокс  
   - Select зі списком країн  
   - Керування значеннями відбувається через стан React  

2. **UncontrolledForm** – форма, яка не контролюється React-станом.  
   - Використовується `useRef` для доступу до значень інпутів.  
   - При сабміті зчитуються значення напряму з DOM.  

3. **DataFetcher** – компонент, що виконує HTTP-запит при завантаженні сторінки.  
   - Використано `useEffect` та `fetch`  
   - Відображає стани: **завантаження**, **успіх**, **помилка**  
   - Дані беруться з [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)
  
-------------

## 🚀 Як запустити проєкт

- Клонуйте репозиторій:

git clone https://github.com/vlada9597/home-work-40.git

- Встановіть залежності:

npm install

- Запустіть проєкт у режимі розробки:

npm run dev

- Відкрийте у браузері:

http://localhost:5173

------------------

🛠 Використані технології

React 18+

Vite

TailwindCSS (для стилізації)

-------------


📂 Структура

Hoome-work-40
├── src/
│ ├── ControlledForm.jsx
│ ├── App.jsx
│ └── main.jsx
│ └── index.css
├── public/
└── package.json
├── README.md
└── ...

