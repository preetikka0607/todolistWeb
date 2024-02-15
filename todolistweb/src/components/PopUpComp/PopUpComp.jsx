import './PopUpComp.css';
import axios from 'axios';


const PopUpComp = ({tasksArray, setTasksArray, setPopupClicked}) => {
  

  async function addTask(){
    const newtaskName = document.getElementById('newtaskName').value;
    const newtaskDesc = document.getElementById('newtaskDesc').value;

    const data = {
        id: tasksArray.length+1,
        taskName: newtaskName,
        taskDescription: newtaskDesc,
        progress: "In-progress"
    }
    try {
      const response = await axios.post('https://65c79665e7c384aada6eb45b.mockapi.io/task', data);
      setTasksArray([...tasksArray,response.data]);
      console.log(response.data);
      // Handle the response or update the state as needed
    } catch (error) {
      console.error("Error in posting data:", error);
    }
    setPopupClicked(false);
  }

const cancelPopUP = () => {
   setPopupClicked(false);
}

  return (
    <div className='newTask-container'>
        <div className='newTask-header'>
          <>New Task</>
          <img src='' alt='newTask'/>
        </div>
        <div className='fields-wrapper'>
        <div className='newTask-fields'>
        <label>Task Name :</label><br></br>
        <input type='text' id='newtaskName'/><br></br>
        <label>Note : </label><br></br>
        <input type='text' id='newtaskDesc'/><br></br>
        </div>
        </div>
        
        <div className='newTask-buttons'>
        <button onClick={addTask}>Add</button>
        <button onClick={cancelPopUP}>Cancel</button>
        </div>
        {/* {tasksArray.map((item)=>(
            <p>{item.taskName}</p>
        ))} */}
    </div>
  )
}
export default PopUpComp;
