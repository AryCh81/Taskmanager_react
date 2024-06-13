import React from 'react';

const Todo = (prop) => {

    return (

        <div key={prop.id} className="flex justify ml-8 my-4">

            <div>
                <input
                    name={prop.id}
                    onChange={prop.handlecheckbox}
                    type="checkbox"
                    checked={prop.isCompleted}
                    className="accent-blue-500 mr-2"
                />
            </div>

            <div className={`font-medium w-[60vw] text-justify break-words md:w-[45vw] ${prop.isCompleted ? "line-through" : ""}`}>
                {prop.value}
            </div>

            <div className='flex gap-1 cursor-pointer'>

                <div onClick={prop.handleedit} className='bg-violet-600 w-7 h-7 rounded-md p-1'>
                    <img width={20} height={20} src="edit.svg" alt="Edit" />
                </div>
                <div onClick={prop.handledelete} className='bg-violet-600 w-7 h-7 rounded-md p-1'>
                    <img width={20} height={20} src="delete.svg" alt="Delete" />
                </div>

            </div>

        </div>
        
    );
};

export default Todo;
