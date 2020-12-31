import { FiChevronRight } from "react-icons/fi"

export default function ProductLink(props) {
    return (
        <a style={{ color: "#0066CC", display: "flex", alignItems: "center", justifyContent: "center", marginTop: ".5%", fontSize: "1.2em", cursor: "pointer" }} href={props.link}>{props.text} <FiChevronRight style={{ marginLeft: "2px"}} /></a>
    )
}