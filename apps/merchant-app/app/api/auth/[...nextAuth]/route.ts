import NextAuth from "next-auth";
import { merauthOptions } from "../../../lib/auth";


const handler = NextAuth(merauthOptions)

export { handler as GET, handler as POST }