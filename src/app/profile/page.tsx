'use client'
import { useSession,signOut } from 'next-auth/react'
import React from 'react'
import Link from 'next/link'
import GoogleProvider from 'next-auth/providers/google'
import { AuthCoingig } from '../../../auth'

export const profile = () => {
  const session = useSession()
  console.log(session);
  
  return (
    <>
    <div className=' flex justify-center items-center gap-7 min-h-7 w-screen bg-slate-500 px-1 py-4 text-white'>
    <h1 className='font-normal'>Profile</h1>
    <Link href='#' onClick={()=>signOut({callbackUrl:'/'})}>Sign Out</Link>
    </div>
    {session?.data?.user?.image && <img src={session.data.user.image} className='px-2 py-3'/>}
      <h3>This profile of {session?.data?.user?.email}</h3>
    </>
  )
}
export default profile
