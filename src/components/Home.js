import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Home = () => {
  const tasks = useSelector(state=>state);
  const dispatch = useDispatch();
  const deleteTask = (id)=>{
      dispatch({type:"DELETE_TASK",payload:id})
  }
    return <div>
        <div className='container'>
            <div className='row'>
            <div className='col-md-12 my-5 text-right'>
                <Link to="/add" className='btn btn-outline-dark'>Add Todo</Link>
            </div>
            <div className='col-md-10 mx-auto'>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Task</th>
    </tr>
  </thead>
  <tbody>
    {
      tasks.map((task,id)=>(
        <tr key={id}>
        <td>{id+1}</td>
        <td>{task.task}</td>
        <td>
          <Link to={`/edit/${task.id}`} className='btn btn-small btn-primary mr-2'>Edit</Link>
          <button type="button" onClick={()=>deleteTask(task.id)} className='btn btn-small btn-danger'>Delete</button>
        </td>
      </tr>
      ))
    }
   
   
  </tbody>
</table>

            </div>

            </div>

        </div>
    </div>;
}



export default Home;