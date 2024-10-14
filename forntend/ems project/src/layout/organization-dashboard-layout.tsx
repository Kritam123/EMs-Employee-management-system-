import Navbar from '@/components/Navbar/navbar'
import Sidebar from '@/components/Sidebar/sidebar'
import { Navigate, Outlet } from 'react-router-dom'
`/`
const OrganizationDashboardLayout = ({user}:UserProfileProps) => {
   
  return (
    <>
       <Sidebar userRole={user.role}/>
       <Navbar name={user.name} role={user.role} profile_img={user.profile_img}/>
       {
        user ?<Outlet/> : <Navigate to={"/auth/sign-in"}/>
       }
    </>
  )
}

export default OrganizationDashboardLayout