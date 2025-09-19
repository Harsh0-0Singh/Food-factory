import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Cookie, Key, LockKeyholeIcon } from "lucide-react";
import { useState } from "react"
import { Link } from "react-router-dom";

const ResetPassword = () => {
    const [newPassword,setnewPassword] = useState<string>("");
    const loading:boolean = false
  return (
    <div className="flex items-center justify-center min-h-screen">
       <form action="" className="flex flex-col gap-5 md:p-8 w-full max-w-md rounded-lg mx-4">
        <div className="text-center">
            <h1 className="font-extrabold flex items-center text-orange justify-center gap-2 uppercase font-cursive text-2xl mb-2">
                Reset Password <Key/>
            </h1>
            <p className="text-gray-500 text-sm">Enter your new password</p>
        </div>
        <div className="relative w-full">
          <Input type="text" value={newPassword} onChange={(e)=>setnewPassword(e.target.value)} placeholder="Enter your new password" className="pl-10"/>  
          <LockKeyholeIcon className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none"/>
        </div>
          {loading ? (
            <Button disabled className="bg-orange w-full hover:bg-hoverOrange">
              <Cookie size={2} className="mr-1 animate-spin" /> Please wait{" "}
            </Button>
          ) : (
            <Button
              type="submit"
              className="bg-orange w-full hover:bg-hoverOrange"
            >
              Reset
            </Button>
          )}
          <span className="text-center">
            Back to 
            <Link to={"/login"} className="text-blue-400"> Login</Link>
          </span>
        </form> 
    </div>
  )
}

export default ResetPassword