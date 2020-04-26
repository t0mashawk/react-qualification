import React from 'react'
import Link from '../../atoms/Link/Link.components'
import Button from '../../atoms/Button/Button.components'
import * as Styled from './ListItem.styles'

interface ListItemProps{
    text:string
    href:string
    buttonText: string
}

function ListItem(props: ListItemProps){
    const {text, href, buttonText} = props
    return(
        <Styled.Container>
            <Link href={href} text={text}/>
            <Button text={buttonText}/>
        </Styled.Container>
    )
}

export default ListItem