import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loading from "../../image/loading.svg"
const Todo = () => {
    const [value , setValue] = useState("")


    const dispatch = useDispatch()
    const {todo} = useSelector(f => f)
    const [bor , setBor] = useState(false)
    const [minnn , setMinnn] = useState(false)
   
    
    function addTask() {
        value === "" ? setBor(true) : dispatch({type : "ADD_TODO" , payload : value})
        setValue("")
        
        setTimeout(() => {
            setMinnn(true)
}, 2000);
}



function del(id) {
    dispatch({type : "DEL_BTN" , payload: id})
}
function keyDow(e) {
if(e.key === "Enter") {
    return addTask()
}
}
    return (
        <div id='todo'>
            <div className="container">
                <div className="todo">
        <h1 className='text-2xl text-center my-11 text-red-600'>Welcome To Do List</h1>
    <div className="relative">
        <input style={{
            border : bor ? "2px solid red" : "2px solid white",

        }} onKeyDown={(e) => {
            keyDow(e)
        }}  value={value} onChange={(e) => setValue(e.target.value.trimStart())} className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={bor ? "Заполните пустое поле!!" : "To Do List"} />
        <button onClick={() => {
            setValue("")
            addTask()
        }}  className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
    </div>
        </div>
                <div className=" my-11">
{
    todo.map((el) => (
        minnn === false ? <img className='mx-auto' src={loading} alt="img" /> :
            <ul class="w-[70%] mx-auto flex items-center  text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <li class="w-full flex justify-between items-center  px-4 py-3  border-b border-gray-200 text-lg rounded-t-lg dark:border-gray-600">
    <h1 className='text-sm'>{el.id}</h1>
        {el.title}
    <button onClick={() => del(el)} className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Delete</button>
    </li> 
</ul>
    ))
}
                </div>
            </div>
        </div>
    );
};

export default Todo;