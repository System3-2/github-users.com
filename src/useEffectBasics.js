import { useState, useEffect } from "react";


const  UseEffectBasics = () => {
  const [value, setValue ] = useState(0);

  useEffect(()=>{
    if(value >= 1) {
      document.title =  `New memssage(${value})`;
    }

  }, [value]);

  useEffect(()=>{
    console.log('Hello World');
  }, [])

  return <>
  <h1>{value}</h1>
  <button className="btn" onClick={()=> setValue(value + 1)}>Click ME</button>
  </>
  
};
 
export default UseEffectBasics;