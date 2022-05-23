import React, { useEffect, useState } from 'react'

function Quot() {
    const [quote, setQuote] = useState("");
    const [author,setAuthor]=useState('')
    const getQuote = () => {
        fetch("https://api.quotable.io/random")
            .then((res) => res.json())
            .then((data) => {
                // let randomNum = Math.floor(Math.random() * data.lenght);
                setQuote(data.content);
                console.log(data.text)
                setAuthor(data.author)
              
            });
            
    }
    useEffect(() => {
        getQuote();
    
    }, []);


    return (
        <>
            <p>"{quote}"</p>
            <h4>:-{author }</h4>
        
           </>   )
      
}

export default Quot