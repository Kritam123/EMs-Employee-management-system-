import Navbar from '@/components/Navbar/navbar'
import Sidebar from '@/components/Sidebar/sidebar'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Loader2 } from 'lucide-react'
import { Navigate, Outlet, useParams } from 'react-router-dom'
`/`
const OrganizationDashboardLayout = ({user}:UserProfileProps) => {
   const {orgId} =useParams();
   const getcurrOrg = async()=>{
    const response = await axios.get(`http://localhost:8000/api/v1/organization/${orgId}/`,{withCredentials:true});
    return response.data;
   }
   const {data,isLoading} = useQuery(["orgData"],getcurrOrg);
  //  const org = data?.data?.org;
  const org = data?.org;
  const userRole = org?.orgMembers?.find((item:any)=>item.employeeId === user?.id)?.role || "EMPLOYEE"
  //  console.log(data.data.org);
  if(isLoading) {
     return (
      <div className='flex items-center justify-center min-h-screen w-full'>
      <Loader2 className='w-16 h-16 text-purple-700 animate-spin'/>
      </div>
     )
  }
  if(isLoading && !data) {
    return null;
  }
  return (
    <>
       <Sidebar  userRole={userRole}/>
       <Navbar orgName={org?.orgName} firstName={user?.firstName} profile_img={user?.profile_img}/>
       {
        !!org ?<Outlet/> : <Navigate to={"/"}/>
       }
    </>
  )
}

export default OrganizationDashboardLayout