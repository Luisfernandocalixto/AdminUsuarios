import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import './input.css';
import Aside from './Aside.js';
import 'animate.css';
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";
import toast from 'react-hot-toast';
import {REACT_APP_API_URL} from '../src/config/data.js';

function Get() {
  const [users, setUsers] = useState([]);

  React.useEffect(() => {
  fetch(`${REACT_APP_API_URL}`, {
    method: 'GET',
    headers :{
      'Content-Type': 'application/json',
    }
    
  })
  .then((res) => res.json())
  .then((data) => setUsers(data));
}, [])


const handleDelete = async (id) => {
  fetch(`${REACT_APP_API_URL}/${id}`, {
    method: 'DELETE',
    headers :{
      'Content-Type': 'application/json',
    }
  })
      .then((res) => {
        if (!res.ok) {
            toast.error('error al eliminar usuario!')
          }
          if (res.ok) {
          toast.success('usuario eliminado!')
          return res.json()
        }


      })
      .then((data) => {
        const remaining = users.filter((user) => user._id !== data['_id']);
        setUsers(remaining)
      });
  }


  return (
    <div className="App">
      <div className='container'>
        <header></header>
        <main >
          <h1 className='text-3xl text-amber-500'>Lista de usuarios</h1>
          <h4 className='text-white text-2xl'>Cantidad: 
            {users ? users.length : `Not users found`}
          </h4>
          {

            users ? users.map((user) => (
              <div key={user._id} className='rounded-xl border border-gray-100 bg-white p-4 m-4 animate__animated animate__fadeIn'>
                <div>
                  {user.name} - {user.email}
                </div>
                <span className='inline-flex overflow-hidden rounded-md border bg-white shadow-sm'>

                  <Link to={`/update/${user._id}/${user.email}/${user.name}`}>
                    <button className='inline-block border-e p-3 text-gray-700 hover:bg-gray-50 focus:relative' title='Edit'>

                    <HiOutlinePencilSquare />
                    </button>
                  </Link>

                  <button className='inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative' onClick={() => handleDelete(user._id)}>
                  <RiDeleteBin6Line />

                  </button>
                </span>
              </div>
            ))
              : ''
          }
        </main>

        <aside className='border-e fixed top-0'>
          <Aside />
        </aside>

        <footer></footer>
      </div>

    </div>
  );
}

export default Get;
