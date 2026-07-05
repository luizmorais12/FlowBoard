import TaskCard from "./TaskCard"
import type { Task } from "../../types/task"
import { useDroppable } from "@dnd-kit/core"

type Props = {
  id: string
  title: string
  tasks: Task[]
}

export default function Column({ id, title, tasks }: Props) {
  const { setNodeRef } = useDroppable({
    id,
  })

  return (
    <div
      ref={setNodeRef}
      className="w-72 bg-zinc-900 p-3 rounded-lg border border-zinc-800"
    >
      <h2 className="text-sm font-bold mb-3 text-zinc-300">
        {title}
      </h2>

      <div className="space-y-2 min-h-[200px]">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
}