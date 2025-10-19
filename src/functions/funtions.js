import { validatePartialUser } from "../security/functions";
export const isHandleDelete = (id, REACT_APP_API_URL, toast, users, setUsers) => {
    fetch(`${REACT_APP_API_URL}/${id}`, {
        method: 'DELETE',
        headers: {
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
            const remaining = users.filter((user) => user.id !== data['id']);
            setUsers(remaining)
        });

}

export const isHandleCreate = async (e, REACT_APP_API_URL, toast, setIsDisabled, navigate) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const sendData = { name, email };


    const verifyData = validatePartialUser({ email, name })
    if (!verifyData.success) {
        const message = JSON.parse(verifyData.error);
        const errors = message.map(err => `${err.message}, `);
        toast.error(errors)
        setIsDisabled(true)

    } else {

        fetch(`${REACT_APP_API_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(sendData),
        })
            .then((res) => {
                if (!res.ok) {
                    toast.error('error al registrar usuario!')
                }
                if (res.ok) {
                    toast.success('usuario registrado!')
                    navigate("/") // redirect to home page
                    res.json()

                }

            })
            .catch((error) => {
                toast.error('error al registrar usuario!')
            })
            .finally(() => {
                setIsDisabled(false)
            })

    }
}


export const isHandleUpdate = async (e, REACT_APP_API_URL, toast, setIsDisabled, navigate, params) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;

    const verifyData = validatePartialUser({ id: params.id, email, name })
    if (!verifyData.success) {
        const message = JSON.parse(verifyData.error);
        const errors = message.map(err => `${err.message}, `);
        toast.error(errors)
        setIsDisabled(true)

    } else {

        fetch(`${REACT_APP_API_URL}/${params.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email })
        })
            .then((res) => {
                if (!res.ok) {
                    toast.error('error al actualizar usuario!')
                }
                if (res.ok) {
                    toast.success('usuario actualizado!')
                    navigate("/")
                    res.json()

                }

            })
            .finally(() => {
                setIsDisabled(false)
            })

    }
}