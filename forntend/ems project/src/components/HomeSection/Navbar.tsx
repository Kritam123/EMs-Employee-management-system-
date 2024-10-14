import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

const Navbar = ({ user }: UserProfileProps) => {
    return (
        <nav className="bg-secondary  fixed top-0 left-0 right-0 shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-indigo-600">EMS</a>
                <div className="space-x-6 hidden md:flex">
                    <a href="#services" className="text-gray-700 font-semibold hover:text-indigo-600">Services</a>
                    <a href="#features" className="text-gray-700  font-semibold hover:text-indigo-600">Features</a>
                    <a href="#testimonials" className="text-gray-700 font-semibold hover:text-indigo-600">Testimonials</a>
                    <a href="#footer" className="text-gray-700 font-semibold hover:text-indigo-600">Contact</a>
                </div>
                <div className="flex gap-3">
                    {
                        !user ?
                            <>
                                <Link to={"/organization/create"}>
                                    <Button>
                                        Create Organization
                                    </Button>
                                </Link>
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
        //     <nav className="fixed top-0 left-0 right-0 w-full ">
        //     <div className="shadow-sm w-[80%] m-auto rounded-md border flex justify-between items-center  bg-secondary px-5 py-4">
        //       <div>
        //       <span className="text-purple-600 font-bold tracking-wider">EMS(Employee Management System)</span>  
        //       </div>          
        //       {/* logo system */}
        //       <div className="flex gap-3">
        //         <Button>
        //           Login as Employee
        //         </Button>
        //         <Button>
        //           Create Organization
        //         </Button>
        //       </div>
        //     </div>
        //   </nav>
    )
}

export default Navbar