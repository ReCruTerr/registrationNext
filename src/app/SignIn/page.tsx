import React from 'react'
import Link from 'next/link'
import MainForm from '../components/MainForm/Form'
export default function page() {
  return (
    <header className=" w-screen h-screen flex justify-center items-center">
        <main className=" max-w-lg w-full min-h-[555px] bg-white  shadow-2xl rounded-lg flex flex-col justify-center items-center">
      <div className=" flex justify-around w-full font-bold text-xl">
        <h3 className="text-[#985ACE]  ">ВХОД</h3>
        <Link href='/registration' className=" transition-all ease-in-out duration-500 cursor-pointer hover:text-[#985ACE]">РЕГИСТРАЦИЯ</Link>
      </div>
      <MainForm/>
    </main>
    </header>
  )
}
