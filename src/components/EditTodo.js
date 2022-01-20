import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditTodo = () => {

  const [task, setTask] = useState("");
  const tasks = useSelector((state)=>state);
  const navigate = useNavigate();

  const {id} = useParams();

  const dispatch = useDispatch();
  const navigator = useNavigate();
  const currentTask =tasks.find(task=>task.id===parseInt(id));

  useEffect(() => {
    if(currentTask){
      setTask(currentTask.task);
    };
  }, [currentTask])

  const handleSubmit = (e)=>{
    e.preventDefault();
    const data = {
      id: parseInt(id),
      task
  };
  dispatch({type: "UPDATE_TODO",payload:data});
  navigate("/")
  }


    return <div>
        <div className='container'>
            <h1 className='text-center'>Update your todo here</h1>
            <div className='row'>
            <div className='col-md-6 shadow mx-auto p-5'>
            <form onSubmit={handleSubmit}>
  <div className="form-group">
    <input type="text" class="form-control"  value={task} onChange={e=>setTask(e.target.value)} placeholder="Enter your Todo...."  />
    
  </div>
  
  <button type="submit" className="btn btn-primary mr-2">Edit Todo</button>
  <Link to="/" className="btn btn-danger">Cancel</Link>
</form>
</div>
            </div>

        </div>

    </div>;
}



export default EditTodo;