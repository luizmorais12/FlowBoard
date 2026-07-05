import { createContext } from "react"
import type { Dispatch, SetStateAction } from "react"
import type { Task } from "../types/task"

export type TaskContextType = {
  tasks: Task[]
  setTasks: Dispatch<SetStateAction<Task[]>>
  createTask: (title: string) => void
}

export const TaskContext = createContext({} as TaskContextType)
