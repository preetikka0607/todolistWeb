import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { NavComp } from './components/NavComp/NavComp';
import { Home } from './pages/Home/Home';
import { useState } from 'react';
import { useEffect} from 'react';
import axios from 'axios';

function App() {
  
  const [tasksArray, setTasksArray] = useState([]);
  const [outputArray, setOutputArray] = useState(tasksArray);

  
  useEffect(()=>{
    getdata();
  },[])

  async function getdata(){
    try{
        await axios.get('https://65c79665e7c384aada6eb45b.mockapi.io/task').then((response)=>{
        console.log(response.data);
        setTasksArray(response.data);
        setOutputArray(response.data);
        console.log(outputArray);
      })
    }
    catch(error){
      console.log("error in fetching data");
    }
  }

  return (
    <div >
      <Router>
        <NavComp tasksArray={tasksArray} setTasksArray={setTasksArray} outputArray={outputArray} setOutputArray={setOutputArray}/>
        <Routes>
           <Route path='/' element={<Home tasksArray={tasksArray} setTasksArray={setTasksArray} outputArray={outputArray} setOutputArray={setOutputArray}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
