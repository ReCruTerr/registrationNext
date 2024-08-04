'use client'
import Link from "next/link";
import React, { useState } from "react";
import { useSession,signIn,signOut } from "next-auth/react";
export default function Home() {
  const session = useSession();
  console.log(session);
  
  return (
   <header className=" flex justify-center  gap-8 items-center min-h-14 w-screen bg-slate-500 text-white font-medium">
    <Link href='#'>Home</Link>
    <Link href='#'>Blog</Link>
    <Link href='#'>About</Link>
    {session?.data ? (<>
    <Link href='/profile'>Profile</Link>
    <Link href='#' onClick={()=>signOut({callbackUrl:'/'})}>SignOut</Link>
    </>) :  <Link href='/SignIn'>SignIn</Link>}
   </header>
  );
}
