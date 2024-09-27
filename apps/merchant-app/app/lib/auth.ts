import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";
export const merauthOptions:NextAuthOptions= {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        })
    ],
  }