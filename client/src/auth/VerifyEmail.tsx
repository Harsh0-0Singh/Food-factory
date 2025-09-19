import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Cookie } from "lucide-react";
import { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRef = useRef<HTMLInputElement[]>([]);
  //   const navigate = useNavigate();
  const loading: boolean = false;
  const handleChange = (index: number, value: string) => {
    if (/^[a-zA-Z0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      //move to next input field if a digit is entered
      if (value !== "" && index < 5) {
        inputRef.current[index + 1].focus();
      }
    }
  };
  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRef.current[index - 1].focus();
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-8 rounded-md w-full max-w-md flex-col gap-10 border border-gray-200">
        <div className="text-center space-y-2 mb-4">
          <h1 className="font-extrabold font-cursive uppercase text-orange text-2xl">
            Verify your email
          </h1>
          <p className="text-sm text-gray-500">
            Enter the 6 digit code sent to your email address
          </p>
        </div>
        <form action="">
          <div className="flex justify-between">
            {otp.map((letter: string, index: number) => (
              <Input
                key={index}
                ref={(el) => {
                  if (el) inputRef.current[index] = el;
                }}
                type="text"
                maxLength={1}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(index, e.target.value)
                }
                value={letter}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                  handleKeyDown(index, e)
                }
                className="md:w-14 md:h-12 w-10 h-9 text-center text-sm md:text-2xl font-normal md:font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            ))}
          </div>
          {loading ? (
            <Button
              disabled
              className="w-full bg-orange mt-4 hover:bg-hoverOrange flex items-center justify-center gap-2"
            >
              <Cookie className="animate-spin" /> Please Wait
            </Button>
          ) : (
            <Button className="w-full bg-orange mt-4 hover:bg-hoverOrange">
              Verify
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;
