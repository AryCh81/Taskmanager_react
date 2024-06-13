
import './App.css'
// import Todo from "./todo.jsx"
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'


function App() {

  // usestates 
  const [data, setdata] = useState([]);
  const [value, setvalue] = useState("");

  // handlechange
  const handlechange = (e) => {
    setvalue(e.target.value)
  }
  // handlesave
  const handlesave = () => {
    if (value.trim()) {
      setdata([...data, { id: uuidv4(), value, isCompleted: false }]);
      setvalue("");
      console.log(data);
    }
  };
  // handlecheckbox 
  const handlecheckbox = (e) => {
    let id = e.target.name;
    let index = data.findIndex(item => {
      return item.id === id;
    })
    let newdata = [...data];
    newdata[index].isCompleted = !newdata[index].isCompleted;
    setdata(newdata);
  };


  return (
    <>
      {/* container */}
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
            // <Todo key={value.id} classes={`${item.isCompleted ? "hidden" : "flex justify ml-8 my-4"} ${item.check ? "line-through" : ""}`} task={item.value} />

            <div key={item.id} className="flex justify ml-8 my-4">

              <div><input name={item.id} onChange={handlecheckbox} type="checkbox" className="accent-blue-500 mr-2" /></div>

              <div className={`font-medium w-[45vw] ${item.isCompleted ? "line-through" : ""}`}>{item.value}</div>

              <div className='flex gap-1 cursor-pointer'>
                <div className=' bg-violet-600 w-7 h-7 rounded-md p-1'><img width={20} height={20} src="edit.svg" alt="img" /></div>
                <div className=' bg-violet-600 w-7 h-7 rounded-md p-1'><img width={20} height={20} src="delete.svg" alt="img" /></div>
              </div>

            </div>

          )

        })}

      </div>

    </>
  )
}

export default App
