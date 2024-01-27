import logo from './logo.svg';
import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/headerComponent';
import Todo from './Components/todoComponent';
import Table from './Components/tableComponent';
import Popup from './Components/modalComponent';
import CountDown from './Components/coundownComponent';
import { Link, NavLink, Outlet } from "react-router-dom";
function App() {
  const [name, setName] = useState('Nguyen Nha');
  const [address, setAdress] = useState('Kien Giang');
  const [todos, setTodos] = useState([
    { id: '001', title: 'React-Js', type: 'JavaScipt' },
    { id: '002', title: 'Node-Js', type: 'JavaScipt' },
    { id: '003', title: 'Next-Js', type: 'JavaScipt' },
    { id: '004', title: 'SpringBoot', type: 'Java' },
    { id: '005', title: 'ASP.Net', type: 'C#' },

  ]);
  const generateId = () => {
    const lastId = todos.length > 0 ? parseInt(todos[todos.length - 1].id, 10) : 0;
    return (lastId + 1).toString().padStart(3, '0');
  };
  const handleClick = (e) => {
    // setName('Doan Nhung');
    // console.log('>>>>Click me!', name);
    if (!address) {
      alert('empty input');
      return;
    }
    const newId = generateId();
    let todo = { id: newId, title: address }
    setTodos([...todos, todo]);
    setAdress('');
  };

  const handleOnchange = (e) => {
    setAdress(e.target.value)
  }

  const deleteDataTodos = (id) => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter((item) => item.id !== id);
    setTodos(currentTodos)
  }

  return (
    <React.Fragment>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className='bg-red-500 mb-4'>Hello world {address} with react+tailwindcss</div>
          <input className='text-black mb-4' type='text' value={address} onChange={(e) => handleOnchange(e)} />
          <button className='bg-blue-500 mb-4 rounded hover:bg-green-500' onClick={(e) => handleClick(e)}>Click me!</button>
          <Todo todos={todos} title={'All todos'} delete={deleteDataTodos} />
          <Todo todos={todos.filter((item) => item.type === 'JavaScipt')} title={'Js todos'} delete={deleteDataTodos} />
          <Outlet />
        </header>
      </div>
    </React.Fragment>
  );
}

export default App;
