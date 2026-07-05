export default function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-900 border-r border-zinc-800 p-4">
      <h1 className="text-xl font-bold text-white mb-6">
        FlowBoard
      </h1>

      <nav className="space-y-2 text-sm text-zinc-300">
        <a className="block hover:text-white cursor-pointer">Dashboard</a>
        <a className="block hover:text-white cursor-pointer">Board</a>
        <a className="block hover:text-white cursor-pointer">Tasks</a>
        <a className="block hover:text-white cursor-pointer">Settings</a>
      </nav>
    </aside>
  )
}