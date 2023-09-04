import { Component } from 'react'
import './button.css'

export default class Button extends Component{

    render(){
        const {text, color, classname}=this.props

        if(color){
            var style={
                color:color
            }
        }
        return (
        <button className={classname? classname: "btn"} style={style}>
            <span>
                {text}
            </span>
        </button>
        )
    }
}

