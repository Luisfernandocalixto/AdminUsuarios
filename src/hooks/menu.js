import { useState } from 'react'

// by options of menu 
export function useMenu() {
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const openMenu = () => setIsOpenMenu(true)

    const closeMenu = () => setIsOpenMenu(false)


    return {
        isOpenMenu,
        openMenu,
        closeMenu
    }

}
