import Sidebar from "@/components/Sidebar";
import { useState } from "react"

export default function Home() {

  const [view, setView] = useState("Search"); // Search Library

  return (
    <>
      <main className="flex w-full h-screen overflow-hidden bg-black">
        <Sidebar />
        <div>Main</div>
      </main>
    <div className="sticky z-20 bottom-0 h-24 w-full bg-red-200">Player</div>
    </>
  )
}
