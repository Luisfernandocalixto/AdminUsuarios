import { REACT_APP_API_URL } from "../config/data"

export const searchUsers = async ({ currentPage }) => {
    try {
        const isCurrentPage = Number(currentPage.get('page')) || 1
        const response = await fetch(`${REACT_APP_API_URL}?page=${isCurrentPage}`)
        const data = await response.json()
        return data;
    } catch (error) {
        throw new Error('Error loading users')
    }
}


