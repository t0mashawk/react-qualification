import React from 'react'
import * as Styled from './Input.styles'

interface InputProps{
    value:string;
    onChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}
function Input(props:InputProps){
    const{value,onChange} = props
    return(
        <Styled.Container>
        <input value={value} onChange={ev=>{onChange(ev)}}></input>
        </Styled.Container>
    )
}

export default Input