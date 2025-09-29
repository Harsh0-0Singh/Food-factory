import { Cookie, Locate, Mail, MapPin, MapPinned, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useRef, useState, type FormEvent } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    fullname: "",
    email: "",
    address: "",
    city: "",
    country: "",
    profilePicture: "",
  });
  const loading: boolean = false;
  const imageRef = useRef<HTMLInputElement | null>(null);
  const [picturePreview, setPicturePreview] = useState<string>("");
  const fileInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPicturePreview(result);
        setProfileData((prevData) => ({
          ...prevData,
          profilePicture: result,
        }));
      }; 
      reader.readAsDataURL(file);
    }
  };

  const updateProfileHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //update profile api call
    console.log(profileData);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };
  return (
    <form onSubmit={updateProfileHandler} className="max-w-7xl mx-auto my-5 ">
      <div className="flex items-center justify-between mx-2">
        <div className="flex items-center gap-2">
          <Avatar className="relative md:w-28 md:h-28 w-20 h-20">
            <AvatarImage src={picturePreview}/>
            <AvatarFallback>HS</AvatarFallback>
            <input
              ref={imageRef}
              onChange={fileInputHandler}
              accept="image/*"
              type="file"
              className="hidden"
            />
            <div
              onClick={() => imageRef.current?.click()}
              className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/50 rounded-full cursor-pointer"
            >
              <Plus className="text-white w-8 h-8 " />
            </div>
          </Avatar>
          <Input
            type="text"
            name="fullname"
            onChange={changeHandler}
            value={profileData.fullname}
            className="font-bold txt-2xl outline-none border-none focus-visible:ring-transparent"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-4 md:gap-2 mx-2 gap-3 my-10">
        <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
          <Mail className="text-gray-500" />
          <div className="w-full">
            <Label>Email</Label>
            <input
              type="text"
              name="email"
              value={profileData.email}
              onChange={changeHandler}
              className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
          <Locate className="text-gray-500" />
          <div className="w-full">
            <Label>Address</Label>
            <input
              type="text"
              name="address"
              value={profileData.address}
              onChange={changeHandler}
              className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200 ">
          <MapPin className="text-gray-500" />
          <div className="w-full">
            <Label>City</Label>
            <input
              type="text"
              name="city"
              value={profileData.city}
              onChange={changeHandler}
              className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
          <MapPinned className="text-gray-500" />
          <div className="w-full">
            <Label>Country</Label>
            <input
              type="text"
              name="country"
              value={profileData.country}
              onChange={changeHandler}
              className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
            />
          </div>
        </div>
        {loading ? (
          <Button disabled className="bg-orange hover:bg-hoverOrange ">
            <Cookie className="animate-spin w-4 h-4" />
            Please Wait...
          </Button>
        ) : (
          <Button type="submit" className="bg-orange hover:bg-hoverOrange ">
            Update
          </Button>
        )}
      </div>
    </form>
  );
};

export default Profile;
