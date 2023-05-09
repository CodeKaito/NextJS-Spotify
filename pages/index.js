import PlaylistView from "@/components/PlaylistView";
import Sidebar from "@/components/Sidebar";
import { useState } from "react"

export default function Home() {

  const [view, setView] = useState("search"); // Search Library
  const [globalPlaylistId, setGlobalPlaylistId] = useState(null);
  const [globalArtistId, setGlobalArtistId] = useState(null);

  return (
    <>
      <main className="h-screen overflow-hidden bg-black">
        <div className="flex w-full">
          <Sidebar
            view={view}
            setView={setView}
            setGlobalPlaylistId={setGlobalPlaylistId}
          />
          {view === "playlist" && <PlaylistView
            setView={setView}
            setGlobalArtistId={setGlobalArtistId}
            globalPlaylistId={globalPlaylistId}
          />}
          </div>
      </main>
    <div className="sticky z-20 bottom-0 h-24 w-full bg-red-200">Player</div>
    </>
  )
}
