import  { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import './App.css';
import './input.css';
import Aside from './Aside.js';
import 'animate.css';
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";
import toast from 'react-hot-toast';
import {REACT_APP_API_URL} from '../src/config/data.js';
import Pagination from './ui/users/pagination.js';
import { searchUsers } from './services/users.js';
import { isHandleDelete } from './functions/funtions.js';
import { CardLoading } from './components/cardsLoading.js';

function Get() {
  const [users, setUsers] = useState([]);
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    (async () => {

      try {
        setLoading(true);
        const fetchUsers = await searchUsers({ currentPage: searchParams });
        const { users, totalPages } = fetchUsers;
        setUsers(users);
        setPages(totalPages);
      } catch (error) {
        toast.error('error al cargar datos!');
      } finally {
        setLoading(false);
      }
    })()
  }, [searchParams])



  const handleDelete = async (id) => {
    isHandleDelete(id, REACT_APP_API_URL, toast, users, setUsers);
  }
   
        
    
    return (
      <div className="App">
      <div className='container'>
        <header></header>
        <main >
          <h1 className='text-3xl text-amber-500'>Lista de usuarios</h1>
          <p className='text-white text-2xl'>Cantidad: 
            {users ? users.length : `Not users found`}
          </p>
            <div className='mt-5 z-0 text-white'>
              <Pagination totalPages={pages} currentPage={currentPage} />
            </div>
          {

            loading ? <CardLoading/>
                : users.map((user) => (
              <div key={user.id} className='rounded-xl border border-gray-100 bg-white p-4 m-4 animate__animated animate__fadeIn'>
                <div>
                  {user.name} - {user.email}
                </div>
                <span className='inline-flex overflow-hidden rounded-md border bg-white shadow-sm'>

                  <Link to={`/update/${user.id}/${user.email}/${user.name}`}>
                    <button type='button' name='button'  id='edit' aria-label='Edit' className='inline-block border-e p-3 text-gray-700 hover:bg-gray-50 focus:relative' title='Edit'>

                    <HiOutlinePencilSquare />
                    </button>
                  </Link>

                  <button type='button' name='button'  id='delete' aria-label='Delete' title='Delete'  
                  className='inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative' onClick={() => handleDelete(user.id)}>
                  <RiDeleteBin6Line />

                  </button>
                </span>
              </div>
            ))
            
          }
        </main>

        <aside className='border-e fixed top-0 z-[10]'>
          <Aside />
        </aside>

        <footer></footer>
      </div>

    </div>
  );
}

export default Get;
