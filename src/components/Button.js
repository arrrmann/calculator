import './button.css'

const Button=({text, color, classname})=>{
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

export default Button