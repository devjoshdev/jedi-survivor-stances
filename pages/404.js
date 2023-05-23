import {fira} from "../utils/loadFonts";

const styles = {
    fontFamily : fira.style.fontFamily
}
export default function Custom404() {
    return (
        <div>
            <h1 style={styles}>404 Error</h1>
            <h2 style={styles}>Page Not Found </h2>
        </div>
    )

// TODO: add NavBar here

};