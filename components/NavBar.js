import Link from "next/link";
import { robotoCondensed } from "@/utils/loadFonts";
const navBarListStyle = {
    display: 'flex',
    justifyContent: 'space-around',

};
const navElementStyle = {
    textDecoration: 'none',
    color: 'white',
    fontFamily: robotoCondensed.style.fontFamily,
    fontSize: '18px',
    borderRadius: "50px",
    border: '5px solid #FF4000',
    padding: '10px',

};

const linkStyle = {
    textDecoration: 'none',
}
const formatNavElement = (elem) => {
    let res = [];
    let words = elem.split('-');
    words.forEach(word => {
        res.push(word[0].toUpperCase() + word.substring(1));
    })
    let formatted = res.join('-');
    while (formatted.length < 20) {
        if (formatted.length % 2 === 0) {
            formatted = '\u00A0' + formatted;
        }
        else {
            formatted += '\u00A0';
        }
    }
    return formatted;
};
const NavBar = (props) => {
    const data = props.navElements;
    return (
        <div>
            <nav>
                <ul style={navBarListStyle}>
                    {data.map(elem => 
                        <Link style={linkStyle} key={elem} href={`/stances/${elem}`}>
                            <p style={navElementStyle} 
                            onMouseEnter={(e) => {e.target.style.boxShadow = '0 4px 8px 0 rgba(255, 64, 0, 0.5)'}}
                            onMouseLeave={(e) => {e.target.style.boxShadow = 'none'}}>{formatNavElement(elem)}</p>
                        </Link>)}
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;