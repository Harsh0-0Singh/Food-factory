import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Cookie, Plus } from "lucide-react";
import { useState, type FormEvent } from "react";
import EditMenu from "./EditMenu";
import { menuSchema, type MenuFormSchema } from "@/schema/menuSchema";
import z from "zod";
// import type { RestaurantFormSchema } from "@/schema/restaurantSchema";
// import { log } from "console";

const AddMenu = () => {
  const loading = false;
  const menu = [
    {
      name: "Biryani",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 80,
      image:
        "https://imgs.search.brave.com/PLVDaqXEt2Z8dktc7tl2ZXjW4PLMpUpW6bTk_JigAFQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQw/Mzk3MzQxOS9waG90/by90YWJsZS10b3At/b2YtZm9vZC1zcHJl/YWQtb24tdGFibGUu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTJjUk9VTXVyWlV0/dXZxRi1icDhsVmla/MHdEWEJOa1pCY0lq/UWoyUVFsZWM9",
    },
    {
      name: "Biryani",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 80,
      image:
        "https://imgs.search.brave.com/PLVDaqXEt2Z8dktc7tl2ZXjW4PLMpUpW6bTk_JigAFQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQw/Mzk3MzQxOS9waG90/by90YWJsZS10b3At/b2YtZm9vZC1zcHJl/YWQtb24tdGFibGUu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTJjUk9VTXVyWlV0/dXZxRi1icDhsVmla/MHdEWEJOa1pCY0lq/UWoyUVFsZWM9",
    },
  ];
  const [selectedMenu, setSelectedMenu] = useState<MenuFormSchema>();
  const [input, setInput] = useState<MenuFormSchema>({
    name: "",
    description: "",
    price: 0,
    image: undefined,
  });
  const [error,setErrors] = useState<Partial<MenuFormSchema>>({});
  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setInput({ ...input, [name]: type === "number" ? Number(value) : value });
  };
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(input); api implemetaion 

    const result = menuSchema.safeParse(input);
    if(!result.success){
        const fieldErrors = z.flattenError(result.error).fieldErrors;
        setErrors(fieldErrors as Partial<MenuFormSchema>)
    }
  };
  const [open, setOpen] = useState<boolean>(false);
  const[editOpen,setEditOpen] = useState<boolean>(false);

  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="flex justify-between">
        <h1 className="font-bold md:font-extrabold text-lg md:text-2xl">
          Available Menus
        </h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger>
            <Button className="bg-orange hover:bg-hoverOrange">
              <Plus className="mr-2" />
              Add Menus
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add A New Menu</DialogTitle>
              <DialogDescription>
                Create a menu that will make your restaurant stand out.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={submitHandler} className="space-y-4">
              <div>
                <Label>Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={changeEventHandler}
                  placeholder="Enter menu name"
                />
                {error && (
                  <span className="text-xs font-medium text-red-600">
                    {error.name}
                  </span>
                )}
              </div>
              <div>
                <Label>Description</Label>
                <Input
                  type="text"
                  name="description"
                  value={input.description}
                  onChange={changeEventHandler}
                  placeholder="Enter menu description"
                />
                {error && (
                  <span className="text-xs font-medium text-red-600">
                    {error.description}
                  </span>
                )}
              </div>
              <div>
                <Label>Price in (Rupees)</Label>
                <Input
                  type="number"
                  name="price"
                  value={input.price}
                  onChange={changeEventHandler}
                  placeholder="Enter menu price"
                />
                {error && (
                  <span className="text-xs font-medium text-red-600">
                    {error.price}
                  </span>
                )}
              </div>
              <div>
                <Label>Upload Menu Image</Label>
                <Input
                  type="file"
                  name="image"
                    onChange={(e) =>
                      setInput({
                        ...input,
                        image: e.target.files?.[0] || undefined,
                      })
                    }
                />
                {error && (
                  <span className="text-xs font-medium text-red-600">
                    {error.image?.name}
                  </span>
                )}
              </div>
              <DialogFooter className="mt-5">
                {loading ? (
                  <Button disabled className="bg-orange hover:bg-hoverOrange">
                    <Cookie className="mr-2 w-4 h-4 animate-spin" />
                    Please wait
                  </Button>
                ) : (
                  <Button className="bg-orange hover:bg-hoverOrange">
                    Submit
                  </Button>
                )}
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      {menu.map((item: any, idx: number) => (
        <div key={idx} className="mt-6 space-y-4">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:p-4 p-2 shadow-md rounded-lg border">
            <img
              alt=""
              src={item.image}
              className="md:h-24 md:w-24 h-16 w-full object-cover rounded-lg"
            />
            <div className="flex-1">
              <h1 className="text-lg font-semibold text-gray-800">{item.name}</h1>
              <p>{item.description}</p>
              <h2>
                Price : <span className="text-[#D19254]">{item.price}</span>
              </h2>
            </div>
            <Button
              onClick={() => {
                setSelectedMenu(item);
                setEditOpen(true);
              }}
              size={"sm"}
              className="bg-orange hover:bg-hoverOrange mt-2"
            >
              Edit
            </Button>
          </div>
        </div>
      ))}

      <EditMenu selectedMenu={selectedMenu}  editOpen = {editOpen} setEditOpen = {setEditOpen}/>
    </div>
  );
};

export default AddMenu;
