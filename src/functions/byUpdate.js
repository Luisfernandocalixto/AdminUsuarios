import { validatePartialUser } from "../security/functions";

export const handleSubmit = async (e, REACT_APP_API_URL, toast, setIsDisabled, navigate, params) => {
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