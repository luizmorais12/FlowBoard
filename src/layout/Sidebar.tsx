import { Link } from "react-router-dom"

export default function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-900 border-r border-zinc-800 p-4">
      <h1 className="text-xl font-bold mb-6">FlowBoard</h1>

      <nav className="space-y-2 text-sm text-zinc-300">
        <Link className="block hover:text-white" to="/">
          Dashboard
        </Link>

        <Link className="block hover:text-white" to="/board">
          Board
        </Link>

        <Link className="block hover:text-white" to="/tasks">
          Tasks
        </Link>

        <Link className="block hover:text-white" to="/settings">
          Settings
        </Link>
      </nav>
    </aside>
  )
}