import type { Task } from "../../types/task"

export default function TaskCard({ task }: { task: Task }) {
  return (
    <div className="bg-zinc-800 p-3 rounded-lg border border-zinc-700 hover:border-zinc-500 transition">
      <h3 className="text-sm font-semibold">{task.title}</h3>
      {task.description && (
        <p className="text-xs text-zinc-400 mt-1">
          {task.description}
        </p>
      )}
    </div>
  )
}
