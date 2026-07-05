import type { Task } from "../../types/task"
import TaskCard from "./TaskCard"

type ColumnProps = {
  title: string
  tasks: Task[]
}

export default function Column({ title, tasks }: ColumnProps) {
  return (
    <div className="w-72 bg-zinc-900 p-3 rounded-lg border border-zinc-800">
      <h2 className="text-sm font-bold mb-3 text-zinc-300">
        {title}
      </h2>

      <div className="space-y-2">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
}
