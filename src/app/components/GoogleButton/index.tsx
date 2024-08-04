'use client'
import React from 'react'
import Image from 'next/image'
import {signIn} from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
export default function Google() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/profile'
  return (
    <button onClick={() => signIn('google',{callbackUrl})}  className=' mt-3 border-[#985ACE] border-[1px]  flex justify-center gap-4 items-center w-full h-10 text-[16px]    font-semibold rounded-lg py-1 px-2 transition-all hover:translate-y-[-5px] hover:shadow-[0_5px_20px_0_rgb(185,42,221)]'>
         <Image
      src="/google.svg"
      width={20}
      height={20}
      alt="Picture of the author"
    />
    <span className='font-normal'>Продолжить с <span className=' font-bold'>Google</span></span>
    </button>
  )
}
