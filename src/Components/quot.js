import React, { useEffect, useState } from 'react'

function Quot() {
    const [quote, setQuote] = useState("");
    const [author,setAuthor]=useState('')
    const getQuote = () => {
        fetch("https://api.quotable.io/random")
            .then((res) => res.json())
            .then((data) => {
               
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
           
            <p className='quote-class'>"{quote}"</p>
            <h4 className='quote-class'>:-{author }</h4>
        
           </>   )
      
}

export default Quot