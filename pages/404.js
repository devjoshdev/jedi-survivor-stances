import NavBar from "@/components/NavBar";
import { fira } from "../utils/loadFonts";

const styles = {
    fontFamily : fira.style.fontFamily,
    textAlign: 'center',
    verticalPadding: '10px',
    color: 'white',
}
const divStyle = {
    marginTop: '10%',
};
const navElements = ["single-saber", "double-bladed", "dual-wield", "crossguard", "blaster"];
export default function Custom404() {
    return (
        <div style={divStyle}>
            <h1 style={styles}>404 Error</h1>
            <h2 style={styles}>Page Not Found </h2>
            <NavBar navElements={navElements}/>
        </div>
    )

};