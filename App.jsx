
import './App.css'
import Todo from "./todo.jsx"
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
// ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'


function App() {

  // usestates 
  const [data, setdata] = useState([]);
  const [value, setvalue] = useState("");
  const [showfinished, setshowfinished] = useState(false);

  //useeffect to save the info even after reload
  useEffect(() => {
    let todoString = localStorage.getItem("data")
    if (todoString) {
      let data = JSON.parse(localStorage.getItem("data"))
      setdata(data)
    }
  }, [])

  const saveToLS = (params) => {
    localStorage.setItem("data", JSON.stringify(data))
  }


  // handlechange
  const handlechange = (e) => {
    setvalue(e.target.value)
    // saveToLS()
  }
  // handlesave
  const handlesave = () => {
    if (value.trim()) {
      setdata([...data, { id: uuidv4(), value, isCompleted: false }]);
      setvalue("");
      console.log(data);
      saveToLS()
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
    saveToLS()
  };

  //handledelete
  const handledelete = (e, id) => {

    let newdata = data.filter(item => {
      return item.id != id;
    });
    setdata(newdata);
    saveToLS()
  };

  //handleedit
  const handleedit = (e, id) => {

    let t = data.filter(i => i.id === id);
    setvalue(t[0].value);
    let newdata = data.filter(item => {
      return item.id != id;
    });
    setdata(newdata);
    saveToLS()
  };

  //handleShowfinished
  const handleshowfinished = () => {
    setshowfinished(!showfinished);
    saveToLS()
  };


  return (
    <>
      {/* Main container */}
      <div className="cont w-[95vw] m-4 min-h-screen mx-auto rounded-lg bg-violet-200 md:w-[60vw]">

        {/* header */}
        <div className="bg-violet-700 rounded-lg h-12 items-center text-white text-xl font-bold text-center md:text-3xl">Your Task Manager</div>

        {/* add a todo */}
        <div className="text-2xl font-bold ml-8 mt-3">Add a Todo</div>

        <div className="flex gap-2 mt-5 md:gap-7">
          <div><input className="rounded-full outline-none ml-7 pl-2 w-[65vw] md:w-[45vw] " id='data' value={value} onChange={handlechange} type="text" placeholder='Add a Todo' /></div>
          <div className="bg-violet-700 text-white font-bold w-14 rounded-full p-1 pl-2 cursor-pointer" onClick={handlesave} >Save</div>
        </div>

        <div className='ml-8 my-4'>
          <input type="checkbox" checked={showfinished} onChange={handleshowfinished} className="accent-blue-500 mr-2" />
          <a>Show Finished</a>
        </div>

        {/* border line */}
        <div className='h-px bg-gray-500'></div>

        {/* Your todos */}
        <div className='font-bold text-2xl my-4 ml-8'>Your Todos</div>

        {data.filter(item => !showfinished || item.isCompleted).map(item => {
          return (

            <Todo
              key={item.id}
              id={item.id}
              value={item.value}
              isCompleted={item.isCompleted}
              handlecheckbox={handlecheckbox}
              handleedit={(e) => { handleedit(e, item.id) }}
              handledelete={(e) => { handledelete(e, item.id) }}
            />

          )

        })}

      </div>

    </>
  )
}

export default App
