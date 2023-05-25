import Link from "next/link";
const NavBar = (props) => {
    const data = props.navElements;
    return (
        <>
            <nav className={"stances-navbar"}>
                <ul>
                    {data.map(elem => <Link key={elem} href={`/stances/${elem}`}>{elem}</Link>)}
                </ul>
            </nav>
        </>
    );
};

export default NavBar;