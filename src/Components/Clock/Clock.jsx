
 import { React, useState} from 'react'
 export default function Clock() {
     const time = new Date().toLocaleTimeString().match(/\d{2}:\d{2}|[AMP]+/g).join(' ');
     const [currentTime, setCurrentTime] = useState(time)

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