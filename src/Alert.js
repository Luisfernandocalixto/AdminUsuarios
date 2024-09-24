import React from 'react'

const Alert = () => {
    return (
        <div>
            <div role="alert" className="rounded-xl border border-gray-100 bg-white p-4">
                <div className="flex items-start gap-4">
                    <span className="text-green-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </span>

                    <div className="flex-1">
                        <strong className="block font-medium text-gray-900"> Cambios guardados </strong>

                        <p className="mt-1 text-sm text-gray-700">Datos actualizados.</p>
                    </div>

                    <button className="text-gray-500 transition hover:text-gray-600">
                        <span className="sr-only">Ocultar mensaje</span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Alert