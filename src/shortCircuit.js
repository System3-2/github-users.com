import React, { createFactory, useState } from 'react';

const ShortCircuit = ()  =>{

  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  const firstValue = text || "Hello world";
  const secondValue = text && "Hello World";

  return <>
  {/* <h1>{firstValue}</h1>
  <h1>value :{secondValue}</h1> */}
  <h1>{text || 'John Doe' }</h1>
  <button className='btn' onClick={()=> {setIsError(!isError)}}>Toggle Error</button>
  {text && <h1>Hello World</h1>}
  {isError && <h1>Error...</h1>}
  {isError ? <p>there is an error...</p> : <div>
      <h2>There is no error</h2>
    </div>}
  </>
}

export default ShortCircuit; 

