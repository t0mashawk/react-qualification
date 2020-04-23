import React from 'react'
import * as Styled from './List.styles'
import ListItem from '../../molecules/ListItem/ListItem.component'

interface ListProps{
    items:any
}

function List(props:ListProps){
    const {items} = props
    return(
        <Styled.Container>
             {items
            
            .map((item: any) => (
                <ListItem href={item.html_url} text={item.name}/>
            ))}
        </Styled.Container>
    )
}

export default List