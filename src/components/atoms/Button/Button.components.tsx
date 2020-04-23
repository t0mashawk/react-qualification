import React from 'react'
import * as Styled from './Button.styles'

interface ButtonProps{
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
    color?: string
    text: string
}

function Button(props: ButtonProps){
    const {onClick, color, text} = props
    return(
        <Styled.Container color={color && color}>
        <button onClick={event => onClick && onClick(event)}>{text}</button>
        </Styled.Container>
    )
}

export default Button