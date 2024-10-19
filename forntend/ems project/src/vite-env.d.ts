/// <reference types="vite/client" />
interface UserProfileProps {
    user:{
        id:string
        firstName:string,
        lastName:string,
        profile_img:string,
        organization:boolean
    }| null
    isLoading:boolean
    }

    interface SignUpProps {
        
            firstName:string,
            lastName:string,
            email:string,
            password:string,
        
    }
    interface CreateOrganization {
        orgName:string
    }