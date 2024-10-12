import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import HomePage from "./pages/HomePage"
import OrganizationDashboardLayout from "./layout/organization-dashboard-layout"
import DashboardPage from "./pages/Dashboard"
import SchedulePage from "./pages/SchedulePage"
import CalenderPage from "./pages/CalenderPage"
import SalaryPage from "./pages/SalaryPage"
import MessagePage from "./pages/MessagePage"
import ContractPage from "./pages/ContractPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/organization/:id/" element={<OrganizationDashboardLayout />}>
            <Route element={<Navigate to={`dashboard`} />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="schedule" element={<SchedulePage />} />
            <Route path="calender" element={<CalenderPage />} />
            <Route path="salaries" element={<SalaryPage />} />
            <Route path="messages" element={<MessagePage />} />
            <Route path="contract" element={<ContractPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
