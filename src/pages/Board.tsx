import { useTasks } from "../hooks/useTasks"
import Column from "../components/board/Column"
import {
  closestCenter,
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import type { DragEndEvent } from "@dnd-kit/core"
import type { TaskStatus } from "../types/task"

const columns = ["todo", "doing", "review", "done"] as const

export default function Board() {
  const { tasks, setTasks } = useTasks()

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
  )

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (!over) return

    const taskId = String(active.id)
    const newStatus = over.id as TaskStatus

    setTasks(prev =>
      prev.map(task =>
        task.id === taskId
          ? { ...task, status: newStatus }
          : task
      )
    )
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div className="flex gap-4 overflow-x-auto">
        {columns.map(column => (
          <Column
            key={column}
            id={column}
            title={column.toUpperCase()}
            tasks={tasks.filter(t => t.status === column)}
          />
        ))}
      </div>
    </DndContext>
  )
}
