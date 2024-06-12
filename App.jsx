
import './App.css'
import Todo from "./todo.jsx"
import { useState } from 'react';


function App() {

  const [data, setdata] = useState([]);
  const [value, setvalue] = useState("");


  const handlechange = (e) => {
    setvalue(e.target.value)
  }

  const handlesave = () => {
    setdata([...data, { value, isCompleted: false }]);
    setvalue("");
    console.log(data);
  }

  //   const handledone=()=>{
  //     classes="flex justify ml-8 my-4 line-through";
  // }


  return (
    <>
      <div className="cont w-3/5 m-4 min-h-screen mx-auto rounded-lg bg-violet-200">

        {/* header */}
        <div className="bg-violet-700 rounded-lg h-12 items-center text-white text-3xl font-bold text-center">Your Task Manager</div>

        {/* add a todo */}
        <div className="text-2xl font-bold ml-8 mt-3">Add a Todo</div>

        <div className="flex gap-7 mt-5">
          <div><input className="rounded-full outline-none ml-7 pl-2 w-[45vw]" id='data' value={value} onChange={handlechange} type="text" placeholder='Add a Todo' /></div>
          <div className="bg-violet-700 text-white font-bold w-14 rounded-full p-1 pl-2 cursor-pointer" onClick={handlesave} >Save</div>
        </div>

        <div className='ml-8 my-4'>
          <input type="checkbox" className="accent-blue-500 mr-2" />
          <a>Show Finished</a>
        </div>

        {/* border line */}
        <div className='h-px bg-gray-500'></div>

        {/* Your todos */}
        <div className='font-bold text-2xl my-4 ml-8'>Your Todos</div>

        {data.map(item => {
          return (
            <Todo key={value} classes={`${item.isCompleted ? "hidden" : "flex justify ml-8 my-4"} ${item.check ? "line-through" : ""}`} task={item.value} />
          )
        })}


      </div>
    </>
  )
}

export default App
