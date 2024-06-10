import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { getUsers} from "@/data/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
    session: {
        strategy: 'jwt',
    },
    secret: process.env.AUTH_SECRET,
    providers: [
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                if (credentials === null) return null;
                try {
                    const user = getUsers(credentials?.email);
                    if (user){
                        const isMatch = user?.password === credentials?.password;
                        if (isMatch){
                            return user;
                        } else {
                            throw new Error("Invalid Credentials");
                        }
                    } else {
                        throw new Error("User not found");
                    }
                }
                catch (error) {
                    throw error;
                }
            },
        }),
    ],
})