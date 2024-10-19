import ViewPageComponents from "@/components/Reuseable_components/view-page-components"

const DashboardPage = ({user}:UserProfileProps) => {
  return (
    <ViewPageComponents ><div className="p-10"><h1 className="text-sm font-medium">Welcome back, <span className="text-lg font-semibold"> {user?.firstName}</span></h1></div></ViewPageComponents>
  )
}

export default DashboardPage