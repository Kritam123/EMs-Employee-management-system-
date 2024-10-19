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
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import InviteCodePage from "./pages/InviteCodePage"
export async function getUserData() {
  const response = await axios.get('http://localhost:8000/api/v1/user/me', { withCredentials: true })
  return response.data
}
function App() {
  const generateAccessToken = async()=>{
    const response = await axios.get('http://localhost:8000/api/v1/user/refresh/token',{withCredentials:true});
    return response.data;
  }
 
  const { data,isLoading } = useQuery(['userData'], getUserData);
  useQuery(["refreshToken"],generateAccessToken);
  const user = data?.data?.user ? data?.data.user :null
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage isLoading ={isLoading} user={user} />} />
          <Route path="/auth/sign-up" element={
            <AuthLayout>
              <SignUp />
            </AuthLayout>
          } />
          <Route path="/auth/sign-in" element={<AuthLayout>
            <SignIn />

          </AuthLayout>} />
          <Route path="/organization/create" element={<CreateOrganization />} />
          <Route path= "/organization/memberInvite/:InviteCode" element={<InviteCodePage/>}/>
          <Route path="/organization/:orgId/" element={<OrganizationDashboardLayout isLoading={isLoading} user={user} />}>
            <Route path="" element={<Navigate to={`dashboard`} />} />
            <Route path="dashboard" element={<DashboardPage isLoading={isLoading} user={user} />} />
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
