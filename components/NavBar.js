const NavBar = (props) => {
    const data = props.navElements;
    return (
        <>
            <nav className={"stances-navbar"}>
                <ul>
                    {data.map(elem => <a key={elem} href={`/stances/${elem}`}>{elem}</a>)}
                </ul>
            </nav>
        </>
    );
};

export default NavBar;