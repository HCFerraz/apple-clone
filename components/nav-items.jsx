export default function NavItem(props) {
    return (
        <ul>
            <li>
                <a href={props.link}>
                    {props.svg ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="44" viewBox={props.viewBox}>
                            <path d={props.d} fill={props.fill} />
                        </svg>
                    ) : <span>{props.text}</span>}
                </a>
            </li>
        </ul>
    )
}