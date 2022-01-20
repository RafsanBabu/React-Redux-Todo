import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import EditTodo from './components/EditTodo';
import AddTodo from './components/AddTodo';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/add" element={<AddTodo />}></Route>
        <Route path="/edit/:id" element={<EditTodo />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
