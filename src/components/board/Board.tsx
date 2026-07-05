import { useState } from "react"
import Column from "./Column"
import type { Task, TaskStatus } from "../../types/task"

const initialTasks: Task[] = [
  { id: "1", title: "Criar layout inicial", status: "todo" },
  { id: "2", title: "Configurar Tailwind", status: "doing" },
  { id: "3", title: "Estruturar projeto", status: "review" },
  { id: "4", title: "Projeto base pronto", status: "done" },
]

const columns: TaskStatus[] = ["todo", "doing", "review", "done"]

export default function Board() {
  const [tasks, setTasks] = useState(initialTasks)

  function handleMoveTask(taskId: string, newStatus: TaskStatus) {
    setTasks(prev =>
      prev.map(task =>
        task.id === taskId
          ? { ...task, status: newStatus }
          : task
      )
    )
  }

  return (
    <div className="flex gap-4 overflow-x-auto">
      {columns.map(column => (
        <Column
          key={column}
          title={column.toUpperCase()}
          status={column}
          tasks={tasks.filter(t => t.status === column)}
          onMoveTask={handleMoveTask}
        />
      ))}
    </div>
  )
}
