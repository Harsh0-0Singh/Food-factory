import { Button } from "@/components/ui/button";
import { userSignupSchema, type signupInputState } from "@/schema/userSchema";
// import { log } from "console";
import { ChefHat, Cookie, LockKeyhole, Mail, Phone, User2 } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link } from "react-router-dom";
import z from "zod";

// type SignupInputState = {
//   fullname: string;
//   email: string;
//   password: string;
//   contact: string;
// };

const Signup = () => {
  const [input, setInput] = useState<signupInputState>({
    fullname: "",
    email: "",
    password: "",
    contact: "",
  });
  const[errors,setErrors] = useState<Partial<signupInputState>>({})
  const changehandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const result = userSignupSchema.safeParse(input);
    if(!result.success){
    const fieldErrors = z.flattenError(result.error).fieldErrors;
    setErrors(fieldErrors as Partial<signupInputState>);
      console.log(errors);
    return;
  
    
    }
    console.log(input);
  };
  const loading: boolean = true;
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={submitHandler}
        className="space-y-6 md:p-8 w-full max-w-md  rounded-lg"
      >
        <h2 className="font-bold font-cursive text-3xl text-orange text-center uppercase flex justify-center items-center"><ChefHat className="rotate-330" size={30}/> Foodfactory</h2>
  <div className="relative ">
          <input
            type="text"
            className="border w-full rounded-md pl-10 focus-visible:ring-1 py-2"
            placeholder="Full name"
            name="fullname"
            value={input.fullname}
            onChange={changehandler}
          />
          <User2
            className="pointer-events-none absolute inset-y-3 left-2 text-gray-500"
            size={20}
          />
           {
            errors && <span className="text-red-400">{errors.fullname}</span>
          }
        </div>
        <div className="relative ">
          <input
            type="email"
            className="border w-full rounded-md pl-10 py-2"
            placeholder="Email"
            name="email"
            value={input.email}
            onChange={changehandler}
          />
          <Mail
            className="pointer-events-none absolute inset-y-3 left-2 text-gray-500"
            size={20}
          />
           {
            errors && <span className="text-red-400">{errors.email}</span>
          }
        </div>
        <div className="relative">
          <input
            type="password"
            className="border w-full rounded-md pl-10 py-2"
            placeholder="password"
            name="password"
            value={input.password}
            onChange={changehandler}
          />
          <LockKeyhole
            className="pointer-events-none absolute inset-y-3 left-2 text-gray-500"
            size={20}
          />
           {
            errors && <span className="text-red-400">{errors.password}</span>
          }
        </div>
        <div className="relative ">
          <input
            type="text"
            className="border w-full rounded-md pl-10 py-2"
            placeholder="Contact"
            name="contact"
            value={input.contact}
            onChange={changehandler}
          />
          <Phone
            className="pointer-events-none absolute inset-y-3 left-2 text-gray-500"
            size={20}
          />
           {
            errors && <span className="text-red-400">{errors.contact}</span>
          }
        </div>
        <div className="">
          {loading ? (
            <Button disabled className="bg-orange w-full hover:bg-hoverOrange">
              <Cookie size={2} className="mr-1 animate-spin" /> Please wait
            </Button>
          ) : (
            <Button
              type="submit"
              className="bg-orange w-full hover:bg-hoverOrange"
            >
              Signup
            </Button>
          )}
        </div>
        <p className="border-t pt-1 text-gray-500 text-center">
          Already have an account ?
          <Link to={"/login"} className="text-blue-400">
            {" "}
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
