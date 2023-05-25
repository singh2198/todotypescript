import React, { useEffect, useState } from 'react'
import TodoInput from './TodoInput'
import Todolist from './Todolist'
import { Addtodb, Getetodo, Toggleapi } from './apicall'
import { Deletapi } from './apicall'
import { Stack } from '@chakra-ui/react'



enum Todostaus{
    Pending="pending",
    Done="Done"
}
export interface Todo{
    id:number,
    title:string,
    status:Todostaus
    handledelet ?:(id:number)=> void,
    handletoggle ?:(id:number)=>void

}




function Todo() {

    const [todo ,settodo]=useState<Todo[]>([])
    const [flg,setflag]=useState<Boolean>(false)


    const handleAdd =(title:string)=>{
        const payload :Todo={
            id:Date.now(),
            title,
            status:Todostaus.Pending
        }
        // console.log(payload)
        Addtodb(payload).then((re)=>{
            handletodo()
        }).catch((error)=>{
            console.log(error)
        })

        
    }

    const handledelet=async(id:number)=>{
        try{
            await Deletapi(id)
            setflag(!flg)
            // console.log("deletd",id)

        }catch(error){
            console.log(error)
        }
    }


    const handletodo =()=>{
        Getetodo().then((res)=>settodo(res)).catch((error)=>console.log(error))
    }

    const handletoggle=async(id:number)=>{
        try{
            // console.log(id)
            const update ={
                status:Todostaus.Done
            }
            // console.log(update)
            await Toggleapi(id,update)
            setflag(!flg)
        }
        catch(error){
            console.log(error)
        }

    }
 
    useEffect(()=>{
       handletodo()
    },[flg])



    
  return (
    <>

    <TodoInput handleAdd={handleAdd}/>


    <Stack bg={'blue.300'} w={'90%'} m={'auto'} p={8} borderRadius={10} mt={'15px'} >

    {todo.map((todo,index)=> (
        <div key={index}>
            <Todolist  todo={todo} handledelet={handledelet} handletoggle={handletoggle}/>
        </div>
    ))}
    </Stack>
    </>
  )
}

export default Todo