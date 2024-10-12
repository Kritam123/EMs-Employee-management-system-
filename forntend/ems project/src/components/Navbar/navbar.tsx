import Box from "../Reuseable_components/Box"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
interface UserProfileProps {
    name:string,
    role:string,
    profile_img:string}
const Navbar = ({name,profile_img}:UserProfileProps) => {
  return (
    <>
    <Box className="fixed top-0 shadow-sm border-b  px-3 md:left-64 left-0 w-full md:w-[calc(100%-16rem)]">
        <div className="flex w-full h-14 justify-end items-center ">
                <Avatar className="cursor-pointer">
                    <AvatarFallback>{name[0]}-{name[name.length-1]}</AvatarFallback>
                    <AvatarImage src={profile_img}/>
                </Avatar>
        </div>
    </Box>
    </>
  )
}

export default Navbar