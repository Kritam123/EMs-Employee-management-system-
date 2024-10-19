import { useQuery } from "@tanstack/react-query";
import axios from "axios"
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ScrollArea } from "@/components/ui/scrollarea"

const OrganizationList = () => {
  const getUserOrg = async()=>{
    const response = await axios.get("http://localhost:8000/api/v1/organization/user/getOrg/all",{withCredentials:true});
    return response.data;
  }
  const {data,isLoading,isError,error} = useQuery(["userOrg"],getUserOrg)
  if(isLoading) {
    return (
      <div className="flex items-center justify-center">
          <Loader2 className="w-4 h-4 animate-spin"/>
      </div>
    )
  }
  if(!data && !isLoading) {
    return <div>
      <h1>No data found!</h1>
    </div>;
  }
  console.log(data.allOrg)
  return (
    <div className="gap-2">
      <div>
        <h1>All Organization</h1>
      </div>
      <ScrollArea className="w-[350px] flex flex-col rounded-md border p-4">
      {
        data?.allOrg?.map((org:any)=>{
          return (
             
            <Link to={`/organization/${org?.id}`}>
          <Button className="text-md text-white">
            {org.name}
          </Button>
          </Link>
         
)

})
      }
       </ScrollArea>
    </div>
  )
}

export default OrganizationList