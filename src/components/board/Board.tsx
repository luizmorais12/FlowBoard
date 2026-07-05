import { useState } from "react"
import Column from "./Column"
import type { Task, TaskStatus } from "../../types/task"

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import type { DragEndEvent } from "@dnd-kit/core"

const columns: TaskStatus[] = ["todo", "doing", "review", "done"]

const initialTasks: Task[] = [
  { id: "1", title: "Criar layout inicial", status: "todo" },
  { id: "2", title: "Configurar Tailwind", status: "doing" },
  { id: "3", title: "Estruturar projeto", status: "review" },
  { id: "4", title: "Projeto base pronto", status: "done" },
]

export default function Board() {
  const [tasks, setTasks] = useState(initialTasks)

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  )

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event

    if (!over) return

    const taskId = active.id as string
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
