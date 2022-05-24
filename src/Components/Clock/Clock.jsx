
 import { React, useState} from 'react'
 export default function Clock() {
    const time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time)
    console.log(currentTime)

     const updatedTime = () => {
         let time = new Date().toLocaleTimeString();
         setCurrentTime(time);
     }
     setInterval(updatedTime, 1000);
   return (
     <div className='time-container'>
        {time}
     </div>
   )
 }