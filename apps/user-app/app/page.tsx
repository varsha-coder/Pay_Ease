"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import {Appbar} from "./ui/Appbar"
import {Home} from './ui/Home'

export default function Page(): JSX.Element {
  const session = useSession();
  return (
   <div className="bg-[#144835] h-screen" >
   <div className="pt-10"><Appbar onSignin={signIn} onSignout={signOut} user={session.data?.user} /></div>
   <div><Home/></div>
   </div>
  )
}