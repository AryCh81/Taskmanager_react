import React from 'react'

const todo = (prop) => {

    const [check, setcheck] = useState(false);
    const handleclick = () => {
        setcheck(!check);
      };
    return (

        <div className={prop.classes}>

            <div><input type="checkbox" onClick={handleclick} className="accent-blue-500 mr-2" /></div>

            <div className=' font-medium w-[45vw]'>{prop.task}</div>
            <div className='flex gap-1 cursor-pointer'>
                <div className=' bg-violet-600 w-7 h-7 rounded-md p-1'><img width={20} height={20} src="edit.svg" alt="img" /></div>
                <div className=' bg-violet-600 w-7 h-7 rounded-md p-1'><img width={20} height={20} src="delete.svg" alt="img" /></div>
            </div>

        </div>
    )
}

export default todo
