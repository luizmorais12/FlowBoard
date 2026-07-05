import { useState } from "react"
import type { Task } from "../../types/task"

type Props = {
  onCreate: (task: Task) => void
}

export default function CreateTask({ onCreate }: Props) {
  const [title, setTitle] = useState("")

  function handleSubmit() {
    if (!title.trim()) return

    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      status: "todo",
    }

    onCreate(newTask)
    setTitle("")
  }

  return (
    <div className="flex gap-2 mb-4">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nova tarefa..."
        className="flex-1 bg-zinc-800 px-3 py-2 rounded-lg text-sm"
      />

      <button
        onClick={handleSubmit}
        className="bg-indigo-600 px-4 py-2 rounded-lg text-sm hover:bg-indigo-500"
      >
        Criar
      </button>
    </div>
  )
}