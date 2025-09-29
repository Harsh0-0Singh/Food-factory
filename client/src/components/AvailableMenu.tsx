import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

const AvailableMenu = () => {
  return (
    <div className="md:p-4 ">
      <h1 className="text-xl md:text-2xl font-extrabold mb-6">
        Available Menu
      </h1>
      <div className="grid md:grid-cols-3 space-y-4 md:space-y-0">
        <Card className="md:max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://imgs.search.brave.com/PLVDaqXEt2Z8dktc7tl2ZXjW4PLMpUpW6bTk_JigAFQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQw/Mzk3MzQxOS9waG90/by90YWJsZS10b3At/b2YtZm9vZC1zcHJl/YWQtb24tdGFibGUu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTJjUk9VTXVyWlV0/dXZxRi1icDhsVmla/MHdEWEJOa1pCY0lq/UWoyUVFsZWM9"
            className="object-cover w-full h-40"
            alt=""
          />
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              {"Biryani"}
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <h3 className="text-lg font-semibold mt-4">
              Price: <span className="text-[#D19254]">₹80</span>
            </h3>
          </CardContent>
          <CardFooter className="p-4">
            <Button className="bg-orange w-full hover:bg-hoverOrange">
              Add to cart
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AvailableMenu;
