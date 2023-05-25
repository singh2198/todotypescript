import React, { useEffect, useState } from "react";

import { Todo } from "./Todo";
import { HStack ,Text,Button} from "@chakra-ui/react";

// import { Box } from '@chakra-ui/react'

interface Todolist {
  todo: Todo;
  handledelet: (id: number) => void,
  handletoggle:(id:number)=>void
}

function Todolist(props: Todolist) {

  const{title,status}=props.todo
  return (
    <>


    <HStack justifyContent={'space-around'}>
      <Text fontFamily={'cursive'}  color={'yellow.900'}>{title}</Text>
      <Text fontFamily={'cursive'} color={status=="pending"?"orange.600":'green.600'}>{status}</Text>
      <Button  onClick={()=>props.handletoggle(props.todo.id)}  bg={'blue.600'} fontFamily={'cursive'} >Change Status</Button>
      <Button onClick={()=>props.handledelet(props.todo.id)} bg={'blue.600'} fontFamily={'cursive'}>Deleted</Button>
    </HStack>
      
    </>
  );
}

export default Todolist;
