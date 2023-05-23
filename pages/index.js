import NavBar from "../components/NavBar";

export default function Home() {
  const navElements = ["single-saber", "double-bladed", "dual-wield", "crossguard", "blaster"]
  return (
    <div>
      <NavBar navElements={navElements}/>
      <h1>Hi</h1>
    </div>
  )
}