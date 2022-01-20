const initialTodo=[
    {
        id:0,
        task:"Dummy Task1 1"
    },
    {
        id:1,
        task:"Dummy Task 2"
    }
];
const todoReducer = ((state=initialTodo,action)=>{
    switch(action.type){
        case "ADD_TASK" :
            state = [...state,action.payload]
            return state;
        case "UPDATE_TODO" :
            const newState =state.map(task=>task.id===action.payload.id ?action.payload : task);
            state = newState;
            return state;
        case "DELETE_TASK" :
            const newTasks= state.filter((task)=>task.id !== action.payload && task) ;
            state = newTasks;
            return state;
        default :
        return state;
    }
})
export default todoReducer;