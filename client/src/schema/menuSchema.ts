import z from "zod";

export const menuSchema = z.object({
   name:z.string().nonempty({message:"Name is empty"}),
   description:z.string().nonempty({message:"Description cannot be empty"}),
   price:z.number().min(0,{message:"Price cannot be negative"}),
   image:z.instanceof(File).optional().refine((file)=>file?.size!== 0 ,{message:"Image file is required"})
})

export type MenuFormSchema = z.infer<typeof menuSchema>;