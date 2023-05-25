import React, { useState } from 'react'


interface Todoinputprops{
    handleAdd:(title:string)=> void
}

function TodoInput(props:Todoinputprops) {

    const [todotitle,settodotitle]=useState('')
    const handlechange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        settodotitle(e.target.value)
    }

    const handleclick =()=>{
        props.handleAdd(todotitle)
        settodotitle('')

    }


  return (
    <>
    <input  value={todotitle} onChange={handlechange} style={{borderRadius:'5px',border:'2px solid black',backgroundColor:"white",color:'black'}}/>
    <button onClick={handleclick}>Add</button>
    </>
  )
}

export default TodoInput