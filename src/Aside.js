import { PiUsersThree } from "react-icons/pi";
import { IoIosArrowUp, IoIosArrowForward } from "react-icons/io";
import { useMenu } from "./hooks/menu";
import { Link } from "react-router-dom";
import 'animate.css';


export default function Aside() {
    // imports  actions of hook useMenu
    const { isOpenMenu, openMenu, closeMenu } = useMenu()

    return (
        <>

            {
                isOpenMenu ? (
                    <button type="button" name="close" aria-label="closeMenu" onClick={closeMenu} className="transition duration-500  ease-in-out flex justify-center items-center absolute top-4 right-4 cursor-pointer translate-x-9 bg-amber-500 rounded-full">
                        <IoIosArrowForward className="size-10 -rotate-180" />
                    </button>

                ) : (

                    <button type="button" name="open" aria-label="openMenu" onClick={openMenu} className="transition duration-500 ease-in-out flex justify-center items-center absolute top-4 right-4 cursor-pointer translate-x-9 bg-amber-500 rounded-full">
                        <IoIosArrowForward className="size-10" />
                    </button>
                )
            }
            <div className={`${isOpenMenu ? 'w-[300px]' : 'w-1 overflow-hidden'} transition-all duration-[450ms] ease-in-out  relative  flex h-screen flex-col justify-between`}>
                <div className="px-4 py-6">
                    <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
                        <PiUsersThree className='size-10' />
                    </span>
                    <ul className="mt-6 space-y-1">
                        <li>
                            <p
                                className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                            >
                                General
                            </p>
                        </li>

                        <li>
                            <details className="group [&_summary::-webkit-details-marker]:hidden">
                                <summary
                                    className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                >
                                    <span className="text-sm font-medium"> Acciones </span>

                                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                        <IoIosArrowUp />
                                    </span>
                                </summary>

                                <ul className="mt-2 space-y-1 px-4">
                                    <li>
                                        <Link
                                            to="/add"
                                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                        >
                                            Usuarios
                                        </Link>
                                    </li>

                                    <li>
                                        <p
                                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                        >
                                            Calendario
                                        </p>
                                    </li>
                                </ul>
                            </details>
                        </li>

                        <li>
                            <p
                                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                Facturación
                            </p>
                        </li>

                        <li>
                            <p
                                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                Facturas
                            </p>
                        </li>

                        <li>
                            <details className="group [&_summary::-webkit-details-marker]:hidden">
                                <summary
                                    className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                >
                                    <span className="text-sm font-medium"> Cuenta </span>

                                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                        <IoIosArrowUp />

                                    </span>
                                </summary>

                                <ul className="mt-2 space-y-1 px-4">
                                    <li>
                                        <p
                                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                        >
                                            Detalles
                                        </p>
                                    </li>

                                    <li>
                                        <p
                                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                        >
                                            Seguridad
                                        </p>
                                    </li>

                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>


            </div>

        </>
    )
}

