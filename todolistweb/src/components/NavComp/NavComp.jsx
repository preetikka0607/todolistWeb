import './NavComp.css';
import todolistimg from '../../assets/todolistimg.png'
import React from 'react';
import {FaSearch} from 'react-icons/fa';


export const NavComp = ({tasksArray, setTasksArray, outputArray, setOutputArray}) => {
  
  function completedData(event){
 
    const inputStr = event.target.value;
    const searchTerm = inputStr.toLowerCase();
    
    const output3 = tasksArray.filter((item)=> item.taskName.toLowerCase().startsWith(searchTerm));
    console.log(output3);
    setOutputArray(output3);
  }

  function filterfunc(){
    const selectedValue = document.getElementById("progress").value;
    console.log(selectedValue);
    if(selectedValue === "All Tasks"){
      setOutputArray(tasksArray);
      
      
    }
    else if(selectedValue === "Completed"){
      const output1 = tasksArray.filter((item) => item.progress==="Completed");
      console.log(output1);
      setOutputArray(output1);
     
    }
    
    else if(selectedValue === "In-progress"){
      const output2 = tasksArray.filter((item) => item.progress==="In-progress");
      console.log(output2);
      setOutputArray(output2);
      
    }
   
    
  }
  return (
    <div className='NavCompAlign'>
    <div className='NavComp'>
      <div className='logoandtext-wrapper'>
      <div className='navimg-wrapper'>
      <img src={todolistimg} alt='todolistimg'/>
      </div>
       <h3>To Do List...</h3>
       </div>
       <div className='filterandsearch'>
        <div className='Searchboxlogo-wrapper'>
       <input type='text' onChange={completedData} placeholder='Search by Task Name'/>
       <FaSearch size={20} color="rgb(71, 135, 238)" />
       </div>
        <select onChange={filterfunc}  name='progress' id='progress'>
            <option>All Tasks</option>
            <option value="Completed">Completed</option>
            <option value="In-progress">in-progress</option>
        </select>
        </div>
    </div>
    </div>
  )
}
