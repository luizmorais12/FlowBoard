import type { ReactNode } from "react"
import Sidebar from "./Sidebar"
import Topbar from "./Topbar"

type Props = {
  children: ReactNode
}

export default function AppLayout({ children }: Props) {
  return (
    <div className="flex h-screen bg-gradient-to-br from-zinc-950 to-black text-white">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Topbar />

        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
