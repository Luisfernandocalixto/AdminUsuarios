import z from 'zod';

// type of date of the user 
const user = z.object({
    id: z.string({ message: 'id inválido!' }).trim().min(1, { message: 'id vacio!' }),
    email: z.string({ message: 'email inválido!' }).trim().min(1, { message: 'email vacio!' }).email({ message: 'formato de email inválido!' }),
    name: z.string({ message: 'nombre inválido!' }).trim().min(1, { message: 'nombre vacio!' }),
})

function validatePartialUser(input) {
    return user.partial().safeParse(input)

}

export { validatePartialUser }