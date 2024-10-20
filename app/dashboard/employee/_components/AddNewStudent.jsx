"use client"
import GlobalApi from '@/app/_services/GlobalApi';

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
  

function AddNewStudent() {
    const [open, setOpen] = useState(false);
    const [work, setWork]= useState([]);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    useEffect(()=>{
      GetAllWork();
    },[])


    const GetAllWork =()=>{
      GlobalApi.GetAllWork().then(resp=>{
        setWork(resp.data);
      })
    }

    const onSubmit = (data) =>{
        console.log("FormData" , data);
        GlobalApi.CreateNewEmployee(data).then(resp=>{
          console.log("--", resp);
        })
    }
  return (
    <div>
      <Button onClick={()=>setOpen(true)}>+ Add New Employee
      </Button>
      <Dialog open={open}>
  
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Add New Employee</DialogTitle>
      <DialogDescription>
        <form onSubmit={handleSubmit(onsubmit)}>
         <div className='py-2'>
            <label>Full Name</label>
            <Input placeholder='Ex. Harry Nolean'
            {...register('name',{required:true})}
            />
         </div>

         <div className='flex flex-col py-2'>
            <label>Working as</label>
            <select className='p-3 border rounded-lg' 
                   {...register('work',{required:true})}>
                    {work.map((item,index)=>
                    <option key={index} value={item.work}>{item.work}</option>
                  
                    )}
 
   
            </select>
         </div>

         <div className='py-2'>
            <label>Designation</label>
            <Input placeholder='Ex. FrontEnd Developer'
                   {...register('designation')}
            />
         </div>
         <div className='py-2'>
            <label>Email</label>
            <Input placeholder='Ex. abc@gmail.com'
                   {...register('email')}
            />
         </div>

         <div className='py-2'>
            <label>Contact</label>
            <Input placeholder='Ex. 1234567890'
                   {...register('contact')}
            />
         </div>

         <div className='flex gap-3 items-center justify-end mt-5'>
            <Button onClick={()=>setOpen(false)} varient="ghost">Cancel</Button>
            <Button 
            type="submit"
         >Save</Button>
         </div>
         </form>
         
         
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default AddNewStudent
