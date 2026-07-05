export type TaskStatus = "todo" | "doing" | "review" | "done"

export type Task = {
  id: string
  title: string
  description?: string
  status: TaskStatus
}