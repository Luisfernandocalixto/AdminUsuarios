import React from 'react';
import './App.css';
import './input.css';
import { Link } from 'react-router-dom';
import 'animate.css'

function App() {

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const sendData = { name, email };


    const URL = process.env.REACT_APP_API_URL_USER;

    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sendData),
    })
      .then((res) => {
        if (!res.ok) {
          document.querySelector('.contentError').innerHTML = 'Ops! Ocurrió un error';
          setTimeout(() => {
            document.querySelector('.contentError').innerHTML = '';

          }, 2500)
        }
        if (res.ok) {
          document.querySelector('.contentSuccess').innerHTML = 'Datos registrados!';
          setTimeout(() => {
            document.querySelector('.contentSuccess').innerHTML = '';

          }, 2500)
          res.json()

        }

      })
      .then((data) => {
        form.reset();
      })

  }



  return (
    <div >

      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">

        <Link to="/">
          <input
            value='Regresar'
            type="submit"
            className="inline rounded-lg cursor-pointer bg-blue-500 px-5 py-3 text-sm font-medium text-white mb-4"
          />
        </Link>
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl text-white">Agregar un nuevo usuario!</h1>
          <div className="contentError  text-red-400 text-3xl w-full text-center animate__animated animate__fadeIn"></div>
          <div className="contentSuccess  text-green-400 text-3xl w-full text-center animate__animated animate__fadeIn"></div>


        </div>

        <form action="" onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <label for="email" className="sr-only">Email</label>

            <div className="relative">
              <input
                type="email"
                name="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Ingrese email"
                required
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                </svg>

              </span>
            </div>
          </div>

          <div>
            <label for="name" className="sr-only">Nombre</label>

            <div className="relative">
              <input
                name='name'
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Ingrese nombre"
                required
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>

              </span>
            </div>
          </div>


          <div className="flex items-center justify-between">

            <input
              id='sendButton'
              value='Enviar'
              type="submit"
              className="inline-block rounded-lg cursor-pointer bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            />

          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
