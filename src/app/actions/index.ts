'use server'

import {signIn} from "@/auth";

export async function doCredentialLogin(formData:any){
    try {
        return await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false
        });
    }catch(err){
        throw err;
    }
}