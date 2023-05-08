import PlaylistView from "@/components/PlaylistView";
import Sidebar from "@/components/Sidebar";
import { useState } from "react"

export default function Home() {

  const [view, setView] = useState("Search"); // Search Library
  const [globalPlaylistId, setGlobalPlaylistId] = useState(null);
  const [globalArtistId, setGlobalArtistId] = useState(null);

  return (
    <>
      <main className="flex w-full h-screen overflow-hidden bg-black">
        <Sidebar
          view={view}
          setView={setView} 
          setGlobalPlaylistId={setGlobalPlaylistId}
          />
        {view === "playlist" && <PlaylistView />}
      </main>
    <div className="sticky z-20 bottom-0 h-24 w-full bg-red-200">Player</div>
    </>
  )
}
