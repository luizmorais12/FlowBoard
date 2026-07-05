type Props = {
  title: string
  value: number
  color?: string
}

export default function StatCard({ title, value }: Props) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-lg">
      <p className="text-xs text-zinc-500">{title}</p>
      <h2 className="text-2xl font-bold mt-1">{value}</h2>
    </div>
  )
}