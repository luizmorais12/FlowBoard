import type { Task } from "../../types/task"

type Props = {
  task: Task
  onMove: () => void
}

export default function TaskCard({ task, onMove }: Props) {
  return (
    <div
      className="bg-zinc-800 p-3 rounded-lg border border-zinc-700 hover:border-zinc-500 transition cursor-pointer"
      onClick={onMove}
    >
      <h3 className="text-sm font-semibold">{task.title}</h3>
    </div>
  )
}
