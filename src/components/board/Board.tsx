import Column from "./Column"
import type { Task } from "../../types/task"

const mockTasks: Task[] = [
  { id: "1", title: "Criar layout inicial", status: "todo" },
  { id: "2", title: "Configurar Tailwind", status: "doing" },
  { id: "3", title: "Estruturar projeto", status: "review" },
  { id: "4", title: "Projeto base pronto", status: "done" },
]

export default function Board() {
  const todo = mockTasks.filter(t => t.status === "todo")
  const doing = mockTasks.filter(t => t.status === "doing")
  const review = mockTasks.filter(t => t.status === "review")
  const done = mockTasks.filter(t => t.status === "done")

  return (
    <div className="flex gap-4 overflow-x-auto">
      <Column title="To Do" tasks={todo} />
      <Column title="Doing" tasks={doing} />
      <Column title="Review" tasks={review} />
      <Column title="Done" tasks={done} />
    </div>
  )
}
