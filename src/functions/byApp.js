import { validatePartialUser } from "../security/functions";

export const handleSubmit = async (e, REACT_APP_API_URL, toast, setIsDisabled, navigate) => {
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

        fetch(REACT_APP_API_URL, {
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
            .finally(() => {
                setIsDisabled(false)
            })

    }
}

