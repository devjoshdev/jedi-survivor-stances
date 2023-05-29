import { stancesData } from "@/utils/data";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import { robotoCondensed } from "@/utils/loadFonts";
const textStyle = {
    textAlign: 'center',
    textSize: '18px',
    color: 'white',
    textShadow: '2px 0px 4px rgba(255, 255, 255, 0.3)',
    fontFamily: robotoCondensed.style.fontFamily,
}
const paragraphStyle = {
    width: '50%',
    margin: '0 auto',
    paddingLeft: '25%',
    paddingRight: '25%',
    color: 'white',
    textShadow: '2px 0px 4px rgba(255, 255, 255, 0.3)',
    fontFamily: robotoCondensed.style.fontFamily,
}
const formatNavElement = (elem) => {
    let res = [];
    let words = elem.split('-');
    words.forEach(word => {
        res.push(word[0].toUpperCase() + word.substring(1));
    })
    let formatted = res.join(' ');
    return formatted;
}
export default function Stance(props) {
    const focusedStance = stancesData.find(stance => stance.id === props['stance-name']);
    return (
        <div>
            <Header title={props["stance-name"]}/>
            <NavBar navElements={stancesData.map(stance => stance.id)}/>
            <h1 style={textStyle}>The {formatNavElement(props["stance-name"])}</h1>
            <p style={paragraphStyle}>{focusedStance.description}</p>
        </div>
    );
};

export async function getStaticPaths() {
    const paths = stancesData.map((stance) => ({
        params: { "stance-name": stance.id },
      })); 
    return {paths, fallback: false}
}

export async function getStaticProps(context) {
    return {props: {"stance-name": context.params["stance-name"]}}
}