import React, { useState } from "react";
import './Claculator.css';

const Calculator =()=>{
    const [number1,fun1] = useState('');
    const [number2,fun2] = useState('');
    const [result,setResult] = useState('');
    
    const numberchange = ( obj, setNumber) =>{
        const value = obj.target.value;
        setNumber(value);
    };

    const add = () =>{
        const sum = Number(number1) + Number(number2);
        setResult(sum);
    };

    const sub =() =>{
        setResult(Number(number1) - Number(number2))
    };

    const multiple = ()=>{
        setResult(Number(number1) * Number(number2))
    };

    const divide = ()=>{
        setResult(Number(number1) / Number(number2))
    };

   return (<>
   
   <div className="calculator">
      <h1 className="calculator">Calculator</h1>
    <b> FirstInput </b> <input type="text"   value={number1}  onChange={(obj)=> numberchange(obj,fun1)}placeholder="Enter the 1 number "></input>
    <br/>
     <b> SecondInput </b><input type="text"  value={number2} onChange={(obj)=> numberchange(obj,fun2)}placeholder="Enter the 2 number "></input>
     <br/>
     <button  onClick={add}> + </button>
     <button  onClick={sub}> - </button>
     <button  onClick={multiple}> * </button>
     <button  onClick={divide}> / </button>
     <br/>
     <br/>
    <h1 className="result"> Result :{result}</h1>   
  
      </div>

   </>

   );
}

export default Calculator;