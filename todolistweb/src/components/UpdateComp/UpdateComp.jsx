import './UpdateComp.css';
import axios from 'axios';
import updateIcon from '../../assets/updateIcon.png';
import { useState } from 'react';

const UpdateComp = ({setisupdate, id, setTasksArray, taskName, taskDesc, progress, setOutputArray}) => {

  var prog = "In-progress";
  const setValue = taskName;
  const setValue2 = taskDesc;

  const [updtaskname, setupdtaskname] = useState(setValue);
  const [updtaskdesc, setupdtaskdesc] = useState(setValue2);
 
  function onchangetask(event){
    setupdtaskname(event.target.value);
    console.log(event.target.value);
  }
  function onClickprogress(){
    prog = "Completed";
    console.log(prog);
    updateTask();
  }
  function onchangetaskdesc(event){
    setupdtaskdesc(event.target.value);
    console.log(event.target.value);
  }
  async function getdataupdate(){
    // try{ 
    //   await axios.get('https://65c79665e7c384aada6eb45b.mockapi.io/task').then((response)=>{
    //     console.log(response.body);
    //     setTasksArray(response.body);
    //   });
    // }catch(error){
    //    console.log("Error in getting the data", error);
    // }
    try{
      await axios.get('https://65c79665e7c384aada6eb45b.mockapi.io/task').then((response)=>{
          console.log(response.data);
          setTasksArray(response.data);
          setOutputArray(response.data);
      })
  }catch{
      console.log("Error in getting data");
  }
  }
  async function updateTask(){
      const apiUrl = `https://65c79665e7c384aada6eb45b.mockapi.io/task/${id}`;
      const updatedTaskName = document.getElementById('updatedTaskName').value;
      const updatedTaskDesc = document.getElementById('updatedTaskDesc').value;
      var testvar=progress==="Completed"?"Completedyes":"in-progress";
      console.log(testvar);
      try{
      const response = await axios.put(apiUrl, {
        taskName: updatedTaskName,
        taskDescription: updatedTaskDesc,
        progress: prog
      
      });
      console.log(response);
      getdataupdate();
      setisupdate(false);
    }catch(error){
      console.log("Error in updating data", error);
    }
  }
  return (
    <div className='update-popup'>
      <div className='popup-wrapper'>
        <div className='popup-header'>
       <>Update Task</>

       <img src={updateIcon} alt='updateicson'/>
       
       </div>
       <div className='outer-field'>
       <div className='popup-fields'>
        <label>Task Name:</label><br></br>
        <input type='text' id='updatedTaskName' value={updtaskname} onChange={onchangetask}/><br></br><br></br>
        <label>Note:</label><br></br>
        <input type='text' id='updatedTaskDesc' value={updtaskdesc} onChange={onchangetaskdesc}/><br></br>
        </div>
        </div>
        <div className='popup-buttons'>
        <button onClick={updateTask}>Update</button>
        <button onClick={()=>{setisupdate(false)}}>Cancel</button>
        <button onClick={onClickprogress}>Mark as Completed</button>
        </div>
        </div>
        {/* {currprogress} */} 
    </div>
  )
}

export default UpdateComp