import './App.css';
import './input.css';
import 'animate.css'
import toast from 'react-hot-toast';
import { MdAlternateEmail } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { Link , useNavigate, } from 'react-router-dom';
import { REACT_APP_API_URL } from './config/data.js';
import { useState } from 'react';
import { handleSubmit } from './functions/byApp.js';


function App() {
  const [isDisabled, setIsDisabled] = useState(true)
  const navigate = useNavigate();


 const isHandleSubmit = (e) => {
   handleSubmit(e, REACT_APP_API_URL, toast, setIsDisabled, navigate)

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

        </div>

        <form  onSubmit={isHandleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <label htmlFor="email" className="sr-only">Email</label>

            <div className="relative">
              <input
                type="email"
                name="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Ingrese email"
                required
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <MdAlternateEmail className='size-4' />


              </span>
            </div>
          </div>

          <div>
            <label htmlFor="name" className="sr-only">Nombre</label>

            <div className="relative">
              <input
                pattern='.{1,}'
                name='name'
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Ingrese nombre"
                required
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">

                <CiUser className='size-4' />

              </span>
            </div>
          </div>


          <div className="flex items-center justify-between">

            <input
              { ...isDisabled ? 'disabled': ''}
              id='sendButton'
              value='Enviar'
              type="submit"
              className="inline-block rounded-lg cursor-pointer bg-blue-500 px-5 py-3 text-sm font-medium text-white w-full"
            />

          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
