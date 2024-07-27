import {z} from "zod";

export const UserSchema = z.object({
    name : z.string()
        .trim()
        .min(1,{message:"Name is required and at least contains 1 characters"})
        .max(100,{message:"Name must be at most 100 characters long"}),
    email : z.string()
        .trim()
        .min(1,{message:"Email is required"})
        .max(100,{message:"Email must be at most 100 characters long"})
        .email("Invalid email address"),
    password: z.string(),
    address : z.string()
        .trim()
        .min(5,{message:"Address is required and at least contains 5 characters"})
        .max(100,{message:"Address must be at most 100 characters long"}),
    roleId: z.number()
        .min(1)
        .max(100,{message:"Role ID is required"}),
})