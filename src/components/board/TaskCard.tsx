import type { Task } from "../../types/task"
import { useDraggable } from "@dnd-kit/core"


type Props = {
  task: Task
}

export default function TaskCard({ task }: Props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  })

  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="bg-zinc-800 p-3 rounded-lg border border-zinc-700 hover:border-zinc-500 transition cursor-grab active:cursor-grabbing"
    >
      <h3 className="text-sm font-semibold">{task.title}</h3>
    </div>
  )
}