import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AddTodo = () => {
    const [task, setTask] = useState("");
    const tasks = useSelector((state)=>state);
    const dispatch = useDispatch();
    const navigator = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();

        const data= {
            id:tasks[tasks.length-1].id+1,
            task
        }
        dispatch({type: "ADD_TASK",payload:data});

        navigator("/");

    }
    console.log(tasks);
    return <div>
        <div className='container'>
            <h1 className='text-center'>Add your todo here</h1>
            <div className='row'>
            <div className='col-md-6 shadow mx-auto p-5'>
            <form onSubmit={handleSubmit}>
  <div className="form-group">
    <input type="text" class="form-control" value={task} placeholder="Enter your Todo...." onChange={e=>setTask(e.target.value)} />
    
  </div>
  
  <button type="submit" className="btn btn-primary">Add Todo</button>
</form>
</div>
            </div>

        </div>

    </div>;
}



export default AddTodo;