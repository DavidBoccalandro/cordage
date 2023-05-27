import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Glossary } from '../pages/glossary/Glossary'
import { Home } from '../pages/home/Home'
import { Log } from '../pages/log/Log'
import { Users } from '../pages/users/Users'

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/log" element={<Log />} />
        <Route path="*" element={<Navigate to="/glossary" replace />} />
      </Routes>
    </Router>
  )
}

export default AppRouter