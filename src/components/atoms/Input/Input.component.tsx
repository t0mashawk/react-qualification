import React from 'react'

interface InputProps{
    value:string;
    onChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}
function Input(props:InputProps){
    const{value,onChange} = props
    return(
        <input value={value} onChange={ev=>onChange(ev)}></input>
    )
}

export default Input