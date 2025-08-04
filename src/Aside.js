import { PiUsersThree } from "react-icons/pi";
import { IoIosArrowUp, IoIosArrowForward } from "react-icons/io";
import { useMenu } from "./hooks/menu";



export default function Aside() {
    // imports  actions of hook useMenu
    const { isOpenMenu, openMenu, closeMenu } = useMenu()

    return (
        <>

            {
                isOpenMenu ? (
                    <button onClick={closeMenu} className="transition duration-500  flex justify-center items-center absolute top-4 right-4 cursor-pointer translate-x-9 bg-amber-500 rounded-full">
                        <IoIosArrowForward className="size-10 -rotate-180" />
                    </button>

                ) : (

                    <button onClick={openMenu} className="transition duration-500 flex justify-center items-center absolute top-4 right-4 cursor-pointer translate-x-9 bg-amber-500 rounded-full">
                        <IoIosArrowForward className="size-10" />
                    </button>
                )
            }
            <div className={`${isOpenMenu ? 'w-[300px]' : 'w-1 overflow-hidden'}  relative  flex h-screen flex-col justify-between`}>
                <div className="px-4 py-6">
                    <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
                        <PiUsersThree className='size-10' />
                    </span>
                    <ul className="mt-6 space-y-1">
                        <li>
                            <a
                                href="#"
                                className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                            >
                                General
                            </a>
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
                                        <a
                                            href="/add"
                                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                        >
                                            Usuarios
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                        >
                                            Calendario
                                        </a>
                                    </li>
                                </ul>
                            </details>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                Facturación
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                Facturas
                            </a>
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
                                        <a
                                            href="#"
                                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                        >
                                            Detalles
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                        >
                                            Seguridad
                                        </a>
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

