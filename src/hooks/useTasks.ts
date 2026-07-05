import { useContext } from "react"
import { TaskContext } from "../context/taskContextValue"

export function useTasks() {
  return useContext(TaskContext)
}
