import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { AuthLayout } from './layouts/AuthLayout.jsx'
import { PortalLayout } from './layouts/PortalLayout.jsx'
import { UserProvider } from './context/UserContext.jsx'
import { DashboardPage } from './pages/DashboardPage.jsx'
import { DisciplinesPage } from './pages/DisciplinesPage.jsx'
import { ForgotPasswordPage } from './pages/ForgotPasswordPage.jsx'
import { LoginPage } from './pages/LoginPage.jsx'
import { ProfilePage } from './pages/ProfilePage.jsx'
import { RegisterStepOnePage } from './pages/RegisterStepOnePage.jsx'
import { RegisterStepTwoPage } from './pages/RegisterStepTwoPage.jsx'
import { ResetPasswordPage } from './pages/ResetPasswordPage.jsx'
import { TutorPage } from './pages/TutorPage.jsx'

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />

          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registro" element={<RegisterStepOnePage />} />
            <Route path="/registro/continuar" element={<RegisterStepTwoPage />} />
            <Route path="/esqueceu-senha" element={<ForgotPasswordPage />} />
            <Route path="/nova-senha" element={<ResetPasswordPage />} />
          </Route>

          <Route element={<PortalLayout />}>
            <Route path="/painel" element={<DashboardPage />} />
            <Route path="/disciplinas" element={<DisciplinesPage />} />
            <Route path="/tutor-ia" element={<TutorPage />} />
            <Route path="/perfil" element={<ProfilePage />} />
          </Route>

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
