import { useTasks } from "../hooks/useTasks"

export default function Dashboard() {
  const { tasks } = useTasks()

  const stats = {
    todo: tasks.filter(t => t.status === "todo").length,
    doing: tasks.filter(t => t.status === "doing").length,
    review: tasks.filter(t => t.status === "review").length,
    done: tasks.filter(t => t.status === "done").length,
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-800">
          To Do: {stats.todo}
        </div>

        <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-800">
          Doing: {stats.doing}
        </div>

        <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-800">
          Review: {stats.review}
        </div>

        <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-800">
          Done: {stats.done}
        </div>
      </div>
    </div>
  )
}
