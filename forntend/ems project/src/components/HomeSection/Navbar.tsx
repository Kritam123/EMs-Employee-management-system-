import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Separator } from "@/components/ui/separator"
import featuredLogo from "@/assets/featured-logo.jpg"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import OrganizationList from '../Navbar/OrganizationList'
import UserSettings from '../Navbar/UserSettings'
import CreateOrganizationModel from '../CustomModels/create-organization-model'
import { Loader2 } from 'lucide-react'
// import { useState } from 'react'

const Navbar = ({ user,isLoading }: UserProfileProps) => {
    // const [open, setOpen] = useState(false);
    return (
        <>

            <nav className="bg-secondary  fixed top-0 left-0 right-0 shadow-md">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <a href="#" className="text-2xl font-bold text-indigo-600">EMS</a>
                    <div className="space-x-6 hidden md:flex">
                        <a href="#services" className="text-gray-700 font-semibold hover:text-indigo-600">Services</a>
                        <a href="#features" className="text-gray-700  font-semibold hover:text-indigo-600">Features</a>
                        <a href="#testimonials" className="text-gray-700 font-semibold hover:text-indigo-600">Testimonials</a>
                        <a href="#footer" className="text-gray-700 font-semibold hover:text-indigo-600">Contact</a>
                    </div>
                    <div className="flex gap-3 ">
                        {
                            user ? 
                                <>
                            
                                { isLoading ? <Loader2 className='w-10 h-10 animate-spin'/> : <>
                                
                                
                                    <Popover >
                                        <PopoverTrigger>
                                            <Button>
                                                My Organizations
                                            </Button></PopoverTrigger>
                                        <PopoverContent>
                                            <OrganizationList />
                                            <Separator />
                                            <div className='flex mt-2 justify-between'>
                                                <CreateOrganizationModel>
                                                    <Button>
                                                        Create Organization
                                                    </Button>
                                                </CreateOrganizationModel>
                                            </div>

                                        </PopoverContent>
                                    </Popover>



                                    <Popover>
                                        <PopoverTrigger>
                                            <Avatar className="cursor-pointer">
                                                <AvatarFallback>{user?.firstName[0]}-{user?.firstName[user?.firstName.length - 1]}</AvatarFallback>
                                                <AvatarImage src={user?.profile_img || featuredLogo} />
                                            </Avatar>
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <UserSettings />
                                        </PopoverContent>
                                    </Popover>

                                
                                </>}
                                   

                                </>

                                :
                                <>
                                    <Link to={"/auth/sign-in"}>
                                        <Button>
                                            Login as Employee
                                        </Button>

                                    </Link>
                                </>
                        }


                    </div>
                    <Button className="md:hidden text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </Button>
                </div>
            </nav>
        </>
    )
}

export default Navbar