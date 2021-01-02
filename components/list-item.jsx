import { useState } from 'react'
import { GoPlusSmall } from 'react-icons/go'

export default function ListItem(props) {
    const [click, setClick] = useState(false)
    function HandleClick() {
        if (click) {
            setClick(false)
            return
        }
        setClick(true)
    }
    const itemsQuantity = []
    for (let i = 0; i < props.itemsQuantity; i++) {
        itemsQuantity.push(i)
    }
    return (
        <>
            {click ? (
                <li style={{ flexDirection: "column" }} onClick={HandleClick}>
                    <p style={{  height: "39px" }}>{props.text} <span style={{ transition: ".2s", transform: "rotate(45deg)", color: "#000000" }} ><GoPlusSmall size={17} /></span></p>
                    <div style={{ color: "black" }}>
                        {itemsQuantity.map((item, index) => {
                            return (
                                <a href={props.links[index]}>{props.itemText[index]}</a>
                            )
                        })}

                    </div>
                </li>
            ) : (
                    <li onClick={HandleClick}>
                        <p>{props.text} <span style={{ transition: ".2s", transform: "rotate(0deg)" }} ><GoPlusSmall size={17} /></span></p>
                    </li>
                )}
        </>
    )
}