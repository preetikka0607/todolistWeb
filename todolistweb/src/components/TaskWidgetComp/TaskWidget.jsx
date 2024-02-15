import React from 'react';
import './TaskWidget.css';
import axios from 'axios';
import { useState } from 'react';
import UpdateComp from '../UpdateComp/UpdateComp';

const TaskWidget = ({id, taskName, taskDesc, progress, tasksArray, setTasksArray}) => {
  const [isupdate, setisupdate] = useState(false);
  async function afterdeletion(){
    try{
        await axios.get('https://65c79665e7c384aada6eb45b.mockapi.io/task').then((response)=>{
            console.log(response.data);
            setTasksArray(response.data);
        })
    }catch{
        console.log("Error in getting data");
    }
  }
  async function deleteTask(taskid){
     const apiUrl = `https://65c79665e7c384aada6eb45b.mockapi.io/task/${taskid}`;
     console.log(apiUrl);
     try {
        const response = await axios.delete(apiUrl);    
        console.log(response);
        afterdeletion();      
        
      } catch (error) {
        console.error('Error', error);
      }
  }

  return (
    <div className='taskWidget-wrapper'>
        <div className='taskdetails'>
        <p id={progress==="Completed"?'strikeoff':'taskName-style1'}>{taskName}</p>
        <p id='taskDesc-style1'>{taskDesc}</p>
        
        </div>
        <div className='button-wrapper'>
        <p id={progress==="In-progress"?'inprogress':'completed'}>{progress}</p>
        <button id='deleteButton' onClick={()=>{deleteTask(id)}}>Delete</button>
        <button id='updateButton' onClick={()=>{setisupdate(true)}}>Update</button>
        </div>
        {isupdate && <UpdateComp setisupdate={setisupdate} id={id} setTasksArray={setTasksArray} taskName={taskName} taskDesc={taskDesc} progress={progress}/>}
    </div>
  )
}

export default TaskWidget