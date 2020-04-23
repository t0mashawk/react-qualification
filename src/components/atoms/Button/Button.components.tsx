import React from 'react'
import * as Styled from './Button.styles'

interface ButtonProps{
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
    label: string;
}

function Button(props: ButtonProps){
    const {label, onClick} = props
    return(
        <Styled.Container>
        <button onClick={event => onClick(event)}>{label}</button>
        </Styled.Container>
    )
}

export default Button