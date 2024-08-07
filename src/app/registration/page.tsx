'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React,{useEffect, useState} from 'react'
import { Button } from '../components/Button'
import Google from '../components/GoogleButton'
import {SubmitHandler, useForm} from 'react-hook-form';
import FormRegistration from '../components/FormRegistration/Form'
export default function Registration(){

  return (
    <header className=" w-screen h-screen flex justify-center items-center">
      <main className=' max-w-lg w-full min-h-[555px] bg-white  shadow-2xl rounded-lg flex flex-col justify-center items-center'>
        <div className=' flex justify-around items-center w-full font-bold text-xl min-h-14'>
          <Link href='/SignIn' className=' transition-all ease-in-out duration-300 hover:text-[#985ACE]'>ВХОД</Link>
          <h3 className='text-[#985ACE]'>РЕГИСТРАЦИЯ</h3>
        </div>
        <FormRegistration/>
      </main>
    </header>
  )
}

