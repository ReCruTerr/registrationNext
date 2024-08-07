'use client'
import React,{useState,useEffect, FormEvent, FormEventHandler} from 'react'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '../Button'
import Google from '../GoogleButton';
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
export const MainForm = () => {
  const router = useRouter();
    interface I_Form { 
        email: string,
        password: string
      }
      const [show,setShow] = useState(false);
    
      const {register,reset,handleSubmit,formState:{errors}} = useForm<I_Form>({
        mode:'onBlur'
      })
     const onSubmit:SubmitHandler<I_Form> = async(data) => {
      const res =  await signIn('credentials',{
        email:data.email,
        password:data.password,
        redirect:false
      });
      if (res && !res.error) {
        router.push('/profile')
      } else {
        console.log(res);
        
      }
      reset()
     }  
      
  return (
    <>
    <form className=" max-w-[270px] w-full  flex flex-col justify-center items-center gap-4 mt-[40px] " action='' onSubmit={handleSubmit(onSubmit)}>
    <div className="max-h-14 w-full" >
      <input type="text" {...register('email',{
        required:true,
      })} id="placeholder-cont" placeholder="E-mail" className="bg-[#F8F1FF] max-w-[270px] w-full min-h-10 rounded-md focus:outline-none px-3 py-2" />
      <p  className=" relative left-[87%]   top-[-29px] cursor-pointer transition-all ease-in-out duration-200"><BsFillPersonFill/> </p>
    
    </div>
    <div className="h-14 w-full">
      <input type={show ? 'text' : 'password'} {...register('password', {
        required:true,
      })} placeholder="Пароль" className="bg-[#F8F1FF]  max-w-[270px] w-full  min-h-10 rounded-md focus:outline-none px-3 py-2" />
      <p  className=" relative left-[87%]  top-[-29px] hover:text-[#985ACE] cursor-pointer transition-all ease-in-out duration-200" onClick={()=>setShow(!show)}>
      {
        show ? <BsFillEyeFill/> : <BsFillEyeSlashFill/>
      }
      </p>
    
    </div>
    <div className=" w-full flex justify-start gap-2 ml-5">
      <input type="checkbox" />
      <span>Запомнить меня</span>
    </div>
    <Button text='ВОЙТИ'/>
    <div className="h-[0.8px] w-[100%] bg-black font-extralight mt-3"></div>
    <Google/>
  </form> 
    </>
  )
}
export default MainForm