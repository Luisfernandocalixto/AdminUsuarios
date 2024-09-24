import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';
import Alert from './Alert';
import { Link } from 'react-router-dom';
import 'animate.css'

function Update() {
  const params = useParams();
  const [user, setUser] = useState(null);

  const URL_UPDATE  = process.env.REACT_APP_API_URL_UPDATE
  React.useEffect(() => {
    fetch(`${URL_UPDATE}${params.id}`)
      .then((res) => res.json())
      .then((data) =>
        setUser(data)
      );
  }, [params])


  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;


    fetch(`https://usuarios-sigma.vercel.app/user/${params.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email })
    })
      .then((res) => {
        if (!res.ok) {
          document.querySelector('.contentSpan').innerHTML = 'Ops! Ocurrió un error';
          setInterval(() => {
            document.querySelector('.contentSpan').innerHTML = '';

          }, 2000)

        }
        if (res.ok) {

          document.querySelector('#sendButton').setAttribute('disabled', true);
          document.querySelector('.Update').removeAttribute('hidden');
          setTimeout(() => {
            window.location.href = "/"
          }, 2500)
          res.json()

        }

      })
      .then((data) => console.log(''))

  }



  return (
    <div >
      <div className="Update" hidden>
        <Alert className='animate__animated animate__fadeIn' />
      </div>

      <div className="contentSpan fixed text-red-400 text-3xl w-full text-center"></div>

      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <Link to="/">
          <input
            value='Regresar'
            type="submit"
            class="inline-block rounded-lg cursor-pointer bg-blue-500 px-5 py-3 text-sm font-medium text-white mb-4"
          />
        </Link>

        <div class="mx-auto max-w-lg text-center">
          <h1 class="text-2xl font-bold sm:text-3xl text-white">Actualiza los datos del usuario!</h1>


        </div>

        <form action="" onSubmit={handleSubmit} class="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <label for="email" class="sr-only">Email</label>

            <div class="relative">
              <input
                type="email"
                name="email"
                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Ingrese email"
                defaultValue={user?.email}
                required
              />

              <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label for="name" class="sr-only">Nombre</label>

            <div class="relative">
              <input
                name='name'
                type="text"
                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Ingrese nombre"
                defaultValue={user?.name}
                required
              />

              <span class="absolute inset-y-0 end-0 grid place-content-center px-4">

                <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM6 8a6 6 0 1 1 12 0A6 6 0 0 1 6 8zm2 10a3 3 0 0 0-3 3 1 1 0 1 1-2 0 5 5 0 0 1 5-5h8a5 5 0 0 1 5 5 1 1 0 1 1-2 0 3 3 0 0 0-3-3H8z" fill="#0D0D0D" /></svg>

              </span>
            </div>
          </div>


          <div class="flex items-center justify-between">

            <input
              id='sendButton'
              value='Enviar'
              type="submit"
              class="inline-block rounded-lg cursor-pointer bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            />

          </div>
        </form>
      </div>
    </div>
  );
}

export default Update;
