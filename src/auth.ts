import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { getUsers} from "@/data/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
    session: {
        strategy: 'jwt',
    },
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
                    const user = getUsers(email);
                }
                catch (error) {}
                return user
            },
        }),
    ],
})