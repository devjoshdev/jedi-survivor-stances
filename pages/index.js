import NavBar from "../components/NavBar";
import Header from "@/components/Header";

export default function Home() {
  const navElements = ["single-saber", "double-bladed", "dual-wield", "crossguard", "blaster"]
  return (
    <div>
      <Header title="JediSurvivorStances"/>
      <NavBar navElements={navElements}/>
    </div>
  )
}