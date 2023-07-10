import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Glossary, Home, Log, Users } from '../pages'
import { MainContainer, Navbar } from '../components'

function AppRouter() {
  return (
    <Router basename={import.meta.env.DEV ? '/' : '/cordage/'}>
      <Navbar />
      <MainContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/log" element={<Log />} />
          <Route path="*" element={<Navigate to="/glossary" replace />} />
        </Routes>
      </MainContainer>
    </Router>
  )
}

export default AppRouter