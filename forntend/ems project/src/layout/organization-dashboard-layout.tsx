import Navbar from '@/components/Navbar/navbar'
import Sidebar from '@/components/Sidebar/sidebar'
import { Outlet } from 'react-router-dom'

const OrganizationDashboardLayout = () => {
    const user = {
        name:"kritam dahal",
        role:"Employee",
        profile_img:"https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
    }
  return (
    <>
       <Sidebar userRole={user.role}/>
       <Navbar name={user.name} role={user.role} profile_img={user.profile_img}/>
        <Outlet/>
    </>
  )
}

export default OrganizationDashboardLayout