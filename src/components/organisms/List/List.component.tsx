import React from 'react'
import * as Styled from './List.styles'
import ListItem from '../../molecules/ListItem/ListItem.component'

interface ListProps{
    items:any
    searchTerm:string
}

function List(props:ListProps){
    const {items, searchTerm} = props
    return(
        <Styled.Container>
             {items
            .filter((item: any) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((item: any) => (
                <ListItem href={item.html_url} text={item.name}/>
            ))}
        </Styled.Container>
    )
}

export default List