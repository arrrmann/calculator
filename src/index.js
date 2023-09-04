import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Button from './components/Button';
import {First, Second} from './components/images'



const App=()=>{
  const buttonsArr=[
    {text: "C", color:"rgb(37, 178, 37)", id:"clear"},
    {text: "<",color:"rgb(37, 178, 37)", id:"bigger"},
    {text: "/", color:"rgb(117, 113, 204)",id:"slash"},
    {text: "X", color:"rgb(117, 113, 204)", id:"X"},
    {text: "7", id:7},
    {text: "8", id:8},
    {text: "9", id:9},
    {text: "-", color:"rgb(117, 113, 204)", id:"minus"},
    {text: "4", id:4},
    {text: "5", id:5},
    {text: "6", id:6},
    {text: "+", color:"rgb(117, 113, 204)", id:"plus"},
    {text: "1", id:1},
    {text: "2", id:2},
    {text: "3", id:3},
    {text: "=", color:"rgb(37, 178, 37)", id:"equal", classname:"equal"},
    {text: "0", id:0, classname:"zero"},//19
    {text: ".", id:"dot"},
  ]

  const data=buttonsArr.map(({text, id, color ,classname})=>{
    return (<Button text={text} key={id} color={color} classname={classname}/>)
  })

  return (
    <div className='calculator-grid'>
      <img src={First} alt='first' className='first'/>
      <img src={Second} alt='second' className='second'/>
      <div className='output'>0</div>
    {data}
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)


