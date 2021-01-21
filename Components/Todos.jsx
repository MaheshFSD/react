import React from "react"
import { v4 as uuidv4 } from 'uuid';
 const Todos=()=>{
   const [title,setTitle]=React.useState("")
   const [todoList,setTodoList]=React.useState(JSON.parse(localStorage.getItem("todoArray"))?JSON.parse(localStorage.getItem("todoArray")):[])
   //console.log(title)
  //let itms=JSON.parse(localStorage.getItem("todoArray"))
  //setTodoList([...itms])
   const addTodos=()=>{
      const todoObj={
         title,
         id:uuidv4()
      }
      setTodoList([...todoList,todoObj])
      setTitle("")
      let list=JSON.parse(localStorage.getItem("todoArray"))
      if(list===null)
      {
         list=[]
         localStorage.setItem("todoArray",JSON.stringify(list))
      }
      list=[...list,todoObj]
      localStorage.setItem("todoArray",JSON.stringify(list))
      
   }
   const removeTodo=(target)=>{
      const list=JSON.parse(localStorage.getItem("todoArray"))   
      const updatedList=list.filter((item)=>  item.id!==target )
      setTodoList([...updatedList])
      localStorage.setItem("todoArray",JSON.stringify(updatedList))
      //console.log(list)
   }
   
   return(
    <div>
       <input
       onChange={(e)=>setTitle(e.target.value)}
       value={title}
       />
      <button onClick={addTodos}>Add</button>
      <div>{todoList?.map((item,index)=>{
         return (<div key={item.id}>{index+1}.  {item.title} <button onClick={()=>removeTodo(item.id)}>Delete</button></div>)
      })}</div>
    </div>
   )
 }
 export default Todos