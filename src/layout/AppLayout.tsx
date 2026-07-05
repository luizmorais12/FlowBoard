import Sidebar from "./Sidebar"
import Topbar from "./Topbar"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-zinc-950 text-white">
      <Sidebar />
    <div className="flex h-screen bg-gradient-to-br from-zinc-950 to-black text-white"></div>
      <div className="flex flex-col flex-1">
        <Topbar />

        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}