import { useDroppable } from "@dnd-kit/core"
import TaskCard from "./TaskCard"
import type { Task } from "../../types/task"

type Props = {
  id: string
  title: string
  tasks: Task[]
}

export default function Column({ id, title, tasks }: Props) {
  const { setNodeRef, isOver } = useDroppable({ id })

  return (
    <div
      ref={setNodeRef}
      className={`w-72 p-3 rounded-lg border transition ${
        isOver ? "border-indigo-500 bg-zinc-800" : "border-zinc-800 bg-zinc-900"
      }`}
    >
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-sm font-bold text-zinc-300">{title}</h2>

        <span className="text-xs text-zinc-500">{tasks.length}</span>
      </div>

      <div className="space-y-2 min-h-[200px]">
        {tasks.length === 0 ? (
          <div className="text-xs text-zinc-500 text-center mt-10">
            <p className="mb-1">Sem tarefas</p>
            <p className="text-[10px] text-zinc-600">
              Arraste ou crie uma nova tarefa
            </p>
          </div>
        ) : (
          tasks.map((task) => <TaskCard key={task.id} task={task} />)
        )}
      </div>
    </div>
  )
}
