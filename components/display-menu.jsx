import { useState } from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'

export default function Menu() {
    const [click, setClick] = useState(false)
    function HandleClick() {
        if (click) {
            setClick(false)
            return
        }
        setClick(true)
    }
    return (
        <>
            {click ? (
                <ul onClick={HandleClick}>
                    <li>asd</li>
                </ul>
            ) : (
                <li onClick={HandleClick}>
                        <HiOutlineMenuAlt4 size="25px"/>
                    </li>
                )}
        </>
    )
}