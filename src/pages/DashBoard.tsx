import StatCard from "../components/dashboard/StatCard"

export default function Dashboard() {
  // mock (depois a gente liga no board real)
  const stats = {
    todo: 4,
    doing: 2,
    review: 1,
    done: 6,
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-4 gap-4">
        <StatCard title="To Do" value={stats.todo} />
        <StatCard title="Doing" value={stats.doing} />
        <StatCard title="Review" value={stats.review} />
        <StatCard title="Done" value={stats.done} />
      </div>

      <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg">
        <h2 className="text-sm text-zinc-400 mb-2">
          Overview
        </h2>

        <p className="text-zinc-500 text-sm">
          Aqui você pode futuramente adicionar gráficos (recharts),
          produtividade semanal e métricas do time.
        </p>
      </div>
    </div>
  )
}