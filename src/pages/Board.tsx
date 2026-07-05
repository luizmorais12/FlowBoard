import { useEffect, useState } from "react"
import Column from "../components/board/Column"
import CreateTask from "../components/board/CreateTask"
import type { Task, TaskStatus } from "../types/task"

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import type { DragEndEvent } from "@dnd-kit/core"

const STORAGE_KEY = "flowboard:tasks"

const columns: TaskStatus[] = ["todo", "doing", "review", "done"]

const initialTasks: Task[] = [
  { id: "1", title: "Criar layout inicial", status: "todo" },
  { id: "2", title: "Configurar Tailwind", status: "doing" },
  { id: "3", title: "Estruturar projeto", status: "review" },
  { id: "4", title: "Projeto base pronto", status: "done" },
]

export default function Board() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : initialTasks
  })

  // salvar sempre que mudar
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    })
  )

  // mover task entre colunas
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

  // criar nova task
  function handleCreate(task: Task) {
    setTasks(prev => [task, ...prev])
  }

  return (
    <div className="flex flex-col gap-4">
      {/* CREATE TASK */}
      <CreateTask onCreate={handleCreate} />

      {/* BOARD */}
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
    </div>
  )
}