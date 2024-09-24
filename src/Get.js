import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import './input.css';
import Aside from './Aside.js';
import 'animate.css';

function Get() {
  const [users, setUsers] = useState([]);
const  URL_SHOW = process.env.REACT_APP_API_URL_USERS;
React.useEffect(() => {
  fetch(URL_SHOW)
  .then((res) => res.json())
  .then((data) => setUsers(data));
}, [])

const  URL_REMOVE = process.env.REACT_APP_API_URL_REMOVE;

  const handleDelete = async (id) => {
    fetch(`${URL_REMOVE}${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (!res.ok) {
          document.querySelector('.contentError').innerHTML = 'Ops, Ocurrió un error!'
          setTimeout(() => {
            document.querySelector('.contentError').innerHTML = ''
  
          }, 2500)
        }
        if (res.ok) {
          document.querySelector('.contentSuccess').innerHTML = 'Datos eliminados!'
          setTimeout(() => {
            document.querySelector('.contentSuccess').innerHTML = ''

          }, 2500)
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
          <h1 className='text-blue-400 text-2xl md:text-6xl'>Usuarios</h1>
          <h4 className='text-white text-2xl anima'>Cantidad:
            {users ? users.length : `Not users found`}
          </h4>
          <div className="contentError  text-red-400 text-3xl w-full text-center"></div>
          <div className="contentSuccess  text-green-400 text-3xl w-full text-center"></div>
          {

            users ? users.map((user) => (
              <div key={user._id} className='rounded-xl border border-gray-100 bg-white p-4 m-4 animate__animated animate__fadeIn'>
                <div>
                  {user.name} - {user.email}
                </div>
                <span className='inline-flex overflow-hidden rounded-md border bg-white shadow-sm'>

                  <Link to={`/update/${user._id}`}>
                    <button className='inline-block border-e p-3 text-gray-700 hover:bg-gray-50 focus:relative' title='Edit'>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>
                    </button>
                  </Link>

                  <button className='inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative' onClick={() => handleDelete(user._id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>

                  </button>
                </span>
              </div>
            ))
              : ''
          }
        </main>

        <aside className='border-e'>
          <Aside />
        </aside>

        <footer></footer>
      </div>

    </div>
  );
}

export default Get;
