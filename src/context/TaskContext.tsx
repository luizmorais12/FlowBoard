import { useEffect, useState } from "react"
import type { ReactNode } from "react"
import { TaskContext } from "./taskContextValue"
import type { Task } from "../types/task"

const STORAGE_KEY = "flowboard:tasks"

const initialTasks: Task[] = [
  { id: "1", title: "Criar layout inicial", status: "todo" },
  { id: "2", title: "Configurar Tailwind", status: "doing" },
  { id: "3", title: "Estruturar projeto", status: "review" },
  { id: "4", title: "Projeto base pronto", status: "done" },
]

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : initialTasks
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  function createTask(title: string) {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      status: "todo",
    }

    setTasks(prev => [newTask, ...prev])
  }

  return (
    <TaskContext.Provider value={{ tasks, setTasks, createTask }}>
      {children}
    </TaskContext.Provider>
  )
}
