import NavBar from "../components/NavBar";
import Head from "next/head";
const homeStyle = {
  background: 'radial-gradient(circle, #4E277D, #230E2F)',
};
export default function Home() {
  const navElements = ["single-saber", "double-bladed", "dual-wield", "crossguard", "blaster"]
  return (
    <div style={homeStyle}>
      <Head>
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            background: ${homeStyle.background};
          }
        `}
        </style>
      </Head>
      <NavBar navElements={navElements}/>
    </div>
  )
}