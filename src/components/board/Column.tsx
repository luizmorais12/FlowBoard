import TaskCard from "./TaskCard"
import type { Task, TaskStatus } from "../../types/task"

type Props = {
  title: string
  status: TaskStatus
  tasks: Task[]
  onMoveTask: (taskId: string, status: TaskStatus) => void
}

export default function Column({ title, tasks, status, onMoveTask }: Props) {
  return (
    <div className="w-72 bg-zinc-900 p-3 rounded-lg border border-zinc-800">
      <h2 className="text-sm font-bold mb-3 text-zinc-300">
        {title}
      </h2>

      <div className="space-y-2 min-h-[200px]">
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onMove={() => onMoveTask(task.id, status)}
          />
        ))}
      </div>
    </div>
  )
}
