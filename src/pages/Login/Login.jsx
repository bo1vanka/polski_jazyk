import React, { useState } from 'react';
import s from './Login.module.scss';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Добавляем стейт для ошибок

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Отправляем запрос на сервер для получения пользователей
    const response = await fetch("http://localhost:5000/users");
    const users = await response.json();

    // Ищем пользователя, чьи email и password совпадают с введенными
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    
    // Если пользователь найден, логиним
    if (user) {
      alert("Успешный вход!");
      // Можно сохранить данные о пользователе в localStorage или Context
      // Например: localStorage.setItem('user', JSON.stringify(user));
    } else {
      setError("Неверная почта или пароль"); // Если пользователя нет - выводим ошибку
    }
  };

  return (
    <div className={s.login_container}>
      <form onSubmit={handleSubmit}> {/* Привязываем обработчик к событию формы */}
        <div className={s.input_group}>
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input 
            type="email" 
            id="exampleInputEmail1" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Обновляем значение email
            aria-describedby="emailHelp" 
          />
          <small id="emailHelp" className={s.form_text}>
            You can enter a fictitious one, I won't send you a confirmation email anyway.
          </small>
        </div>

        <div className={s.input_group}>
          <label htmlFor="exampleInputPassword1">Password</label>
          <input 
            type="password" 
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Обновляем значение пароля
          />
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Выводим ошибку, если она есть */}

        <button type="submit" className={s.primary}>
          Submit
        </button>
      </form>

      <Link to="/registration">
        <button type="button" className={s.secondary}>
          Register
        </button>
      </Link>
    </div>
  );
}

export default Login;
