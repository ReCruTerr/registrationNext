import React,{useEffect,useState} from 'react'
import { useRouter } from 'next/navigation';
import {SubmitHandler, useForm} from 'react-hook-form'
import { Button } from '../Button';
import Google from '../GoogleButton';

export default function FormRegistration() {
    const router = useRouter();
    const [path,setPath] = useState(false)

    interface I_Register {
        name:string,
        secondName:string,
        email:string,
        password:string,
        confPassw:string
      }

    const {handleSubmit,register,reset,formState:{errors},watch} = useForm<I_Register>()

    const Submit:SubmitHandler<I_Register> = (data) => {
        setPath(true)
        console.log(data);
        
      }
      useEffect(() => {
        if (path) {
          router.push('/')
        }
      },[path])


  return (
    <form action="" onSubmit={handleSubmit(Submit)} className=' max-w-[270px] w-full text-[13px]   flex flex-col justify-center items-center gap-3 '>
        <div className="max-h-14 w-full " >
        {errors?.name ? (<label className=' text-red-600 text[12px]'>Заполните поле корректно</label>) : (<label htmlFor="" className='text-[12px] text-[#403A4B] opacity-80'>Имя</label>)}
          <input type="text" placeholder='Минимум 3 символа' {...register('name',{
            required:true,
            minLength:3
          })} id="placeholder-cont" className="bg-[#F8F1FF]  w-full  min-h-10 rounded-md focus:outline-none px-3 py-2" />
        </div>
        <div className="max-h-14 w-full " >
        {errors?.secondName ? (<label className=' text-red-600 text[12px]'>Заполните поле корректно</label>) : (<label htmlFor="" className='text-[12px] text-[#403A4B] opacity-80'>Фамилия</label>)}
          <input type="text" placeholder='Минимум 5 символов'{...register('secondName',{
            required:true,
            minLength:5
          })} id="placeholder-cont" className="bg-[#F8F1FF]  w-full min-h-10 rounded-md focus:outline-none px-3 py-2" />
        </div>
        <div className="max-h-14 w-full " >
        {errors?.email ? (<label className=' text-red-600 text[12px]'>Заполните поле корректно</label>) : (<label htmlFor="" className='text-[12px] text-[#403A4B] opacity-80'>E-mail</label>)}
          <input type="e-mail"{...register('email',{
            required:true,
            validate:(val:string) => {
              if (val.includes('@')) {
                return true
              }
              return false
            }
          })} id="placeholder-cont"placeholder='Поле должно содержать @' className="bg-[#F8F1FF] w-full min-h-10 rounded-md focus:outline-none px-3 py-2" />
        </div>
        <div className="max-h-14 w-full " >
        {errors?.password ? (<label className=' text-red-600 text[12px]'>Заполните поле корректно</label>) : (<label htmlFor="" className='text-[12px] text-[#403A4B] opacity-80'>Пароль</label>)}
          <input type="password" {...register('password',{
            required:true,
            minLength:7
          })}  placeholder='Минимум 7 символов'  id="placeholder-cont" className="bg-[#F8F1FF]  w-full min-h-10 rounded-md focus:outline-none px-3 py-2" />

        </div>
        <div className="max-h-14 w-full " >
        {errors?.confPassw ? (<label className=' text-red-600 text[12px]'>Пароли должны совпадать!</label>) : (<label htmlFor="" className='text-[12px] text-[#403A4B] opacity-80'>Подтвердите пароль</label>)}
          <input type="password" placeholder='Подтвердите пароль' {...register('confPassw',{
            required:true,
            validate:(val:string) => {
              if (watch('password') != val) {
                return 'Пароли должны совпадать'
              }
            }

          })} id="placeholder-cont"className="bg-[#F8F1FF]  w-full min-h-10 rounded-md focus:outline-none px-3 py-2" />
        </div>
       <div className='w-full  flex flex-col gap-2 mx-3 my-3'>
        <Button text='РЕГИСТРАЦИЯ'/>
        <div className="h-[0.8px] w-[100%] bg-black font-extralight mt-3"></div>
        <Google/>
       </div>
        </form>
  )
}
