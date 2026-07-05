import type { Task } from "../../types/task"
import { useDraggable } from "@dnd-kit/core"

type Props = {
  task: Task
}

export default function TaskCard({ task }: Props) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: task.id,
    })

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`
        bg-zinc-800 p-3 rounded-lg border border-zinc-700 cursor-grab active:cursor-grabbing
        transition
        ${isDragging ? "opacity-50 scale-105" : "opacity-100"}
      `}
    >
      <h3 className="text-sm font-semibold">{task.title}</h3>
    </div>
  )
}
