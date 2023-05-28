import Head from "next/head";
const Header = (props) => {
    return (
        <Head>
            <title>{props.title}</title>
            <link rel="icon" href="/red-saber.png"/>
        </Head>
    )
};

export default Header;