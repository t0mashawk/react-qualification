import React from 'react'

interface LinkProps{
    text:string,
    href:string
}

function Link(props:LinkProps){
    const {text, href} = props
    return(
        <a href={href}>{text}</a>
    )
}

export default Link