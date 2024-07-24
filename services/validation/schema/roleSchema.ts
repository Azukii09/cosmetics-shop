import {z} from "zod";

export const RoleSchema = z.object({
    name : z.string().trim().min(1,{
        message:"Role Name must be at least 1 characters"
    }).max(100,{
        message:"Role Name must be at most 100 characters long"
    }),
    desc : z.string().trim().min(3,{
        message:"Description must be at least 1 characters"
    }).max(100,{
        message:"Description must be at most 100 characters long"
    })
})