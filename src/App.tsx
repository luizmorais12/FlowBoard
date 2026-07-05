import AppLayout from "./layout/AppLayout"
import { Routes, Route } from "react-router-dom"

import Dashboard from "./pages/DashBoard"
import Board from "./pages/Board"
import Settings from "./pages/Settings"

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/board" element={<Board />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </AppLayout>
  )
}
