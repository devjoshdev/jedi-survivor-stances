import NavBar from "../components/NavBar";
import Head from "next/head";

export default function Home() {
  const navElements = ["single-saber", "double-bladed", "dual-wield", "crossguard", "blaster"]
  return (
    <div>
      <Head>
      </Head>
      <NavBar navElements={navElements}/>
    </div>
  )
}