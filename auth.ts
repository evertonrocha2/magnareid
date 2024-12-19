import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { compareSync, hashSync} from "bcrypt-ts";
import db from "@/lib/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      //@ts-ignore
      authorize: async (credentials) => {
        let user = null
        //@ts-ignore
        const pwHash = hashSync(credentials.password)
        user = db.user.findUnique({
          where: {
            email: credentials.email as string
          }
        })
        
        // user = await getUserFromDb(credentials.email, pwHash)
        if(!user){
          throw new Error('Credenciais Inválidas')
        }
        return user;
      }
    })
  ],
})