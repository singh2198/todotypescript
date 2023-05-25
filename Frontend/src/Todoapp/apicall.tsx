
import axios , {AxiosResponse} from "axios"
import { Todo } from "./Todo"


export const Addtodb=async(payload:Todo)=>{
    try{
        let response:AxiosResponse<Todo[]> =  await axios.post(`https://json-server-mock5.vercel.app/todos`,payload);
        // console.log("apicall")
        return response.data

    }
    catch(error){
        console.log("error",error)
    }

    
}

export const Getetodo=async()=>{
    let response :AxiosResponse<Todo[]> =await axios.get(`https://json-server-mock5.vercel.app/todos`)
    // console.log("get",response)
    return response.data
}

export const Deletapi=async(id:number)=>{
    try{

        let response :AxiosResponse<Todo[]> =await axios.delete(`https://json-server-mock5.vercel.app/todos/${id}`)
        // console.log("delete",response)
        // return response.data

    }
    catch(error){
        console.log("delete",error)
    }
    
}

export const Toggleapi=async(id:number,update:object)=>{
    // console.log(update)
    try{
        let response :AxiosResponse<Todo[]> =await axios.patch(`https://json-server-mock5.vercel.app/todos/${id}`,update)
        console.log(response.data)
        return response.data

    }
    catch(error){
        console.log("Toggle error",error);
        
    }

}