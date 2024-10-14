import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import HomePage from "./pages/HomePage"
import OrganizationDashboardLayout from "./layout/organization-dashboard-layout"
import DashboardPage from "./pages/Dashboard"
import SchedulePage from "./pages/SchedulePage"
import CalenderPage from "./pages/CalenderPage"
import SalaryPage from "./pages/SalaryPage"
import MessagePage from "./pages/MessagePage"
import ContractPage from "./pages/ContractPage"
import SignUp from "./pages/signUp"
import SignIn from "./pages/SignIn"
import CreateOrganization from "./pages/create-organization"
import AuthLayout from "./layout/AuthLayout"

function App() {
  const user = {
    name: "kritam dahal",
    role: "Employee",
    profile_img: "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage user={user} />} />
          <Route path="/auth/sign-up" element={
            <AuthLayout>
              <SignUp />
            </AuthLayout>
          } />
          <Route path="/auth/sign-in" element={<AuthLayout>
            <SignIn />

          </AuthLayout>} />
          <Route path="/organization/create" element={<CreateOrganization />} />
          <Route path="/organization/:id/" element={<OrganizationDashboardLayout user={user} />}>
            <Route path="" element={<Navigate to={`dashboard`} />} />
            <Route path="dashboard" element={<DashboardPage user={user} />} />
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
