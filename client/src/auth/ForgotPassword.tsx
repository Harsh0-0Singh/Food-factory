import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Cookie, Frown, Mail } from "lucide-react";
import { useState } from "react"
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    const [email,setEmail] = useState<string>("");
    const loading:boolean = false
  return (
    <div className="flex items-center justify-center min-h-screen">
       <form action="" className="flex flex-col gap-5 md:p-8 w-full max-w-md rounded-lg mx-4">
        <div className="text-center">
            <h1 className="font-extrabold flex items-center text-orange justify-center gap-2 uppercase font-cursive text-2xl mb-2">
                Forgot Password <Frown/>
            </h1>
            <p className="text-gray-500 text-sm">Enter your email address to reset your password</p>
        </div>
        <div className="relative w-full">
          <Input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" className="pl-10"/>  
          <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none"/>
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
              Send Reset Link
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

export default ForgotPassword