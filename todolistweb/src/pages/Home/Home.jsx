import './Home.css';
import React from 'react';
import { useState} from 'react';
import { useEffect} from 'react';
import PopUpComp from '../../components/PopUpComp/PopUpComp';
import axios from 'axios';
import TaskWidget from '../../components/TaskWidgetComp/TaskWidget';

export const Home = () => {
    
    const [currentDayDate, setCurrentDayDate] = useState(new Date());
   
    const [PopupClicked, setPopupClicked] = useState(false);

    const [tasksArray, setTasksArray] = useState([]);

    useEffect(()=>{
      getdata();
    },[])

    async function getdata(){
      try{
          await axios.get('https://65c79665e7c384aada6eb45b.mockapi.io/task').then((response)=>{
          console.log(response.data);
          setTasksArray(response.data);
        })
      }
      catch(error){
        console.log("error in fetching data");
      }
    }

    function CallPopUpComp(){
        setPopupClicked(true);
    } 


    
    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentDayDate(new Date());
        }, 1000);
    
        return () => clearInterval(intervalId);
      }, []);

      const formatDate = (date) => {
        const options = {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          // hour: 'numeric',
          // minute: 'numeric',
          // second: 'numeric',
        };
        return date.toLocaleDateString('en-US', options);
      };

     

  return (
    <div className='NavCompAlign'>
        <div className='homeWidget'>
             <div className='header'>
              <div className='DateContainer'>
             <h1>Today's Task</h1>
             <p>{formatDate(currentDayDate)}</p>
             </div>
             <div className='NewButton'>
                <button onClick={CallPopUpComp}>New Task +</button>
             </div>
             </div>
             <div className='tasksContainer'> 
                 {tasksArray.map((item)=>(
                  //  <p>{item.taskName}</p>
                  <TaskWidget id={item.id} taskName={item.taskName} taskDesc={item.taskDescription} progress={item.progress} tasksArray={tasksArray} setTasksArray={setTasksArray}/>
                 ))}
             </div>
            
             {PopupClicked && <PopUpComp tasksArray={tasksArray} setTasksArray={setTasksArray} setPopupClicked={setPopupClicked}/>}
             {/* <PopUpComp tasksArray={tasksArray} setTasksArray={setTasksArray}/> */}
        </div>
    </div>
  )
}
