import {genSaltSync, hashSync} from "bcrypt-ts";

export default function HashPassword(unHashedPass: string) {
    return hashSync(unHashedPass, genSaltSync(10))
}