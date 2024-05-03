import React from 'react'

function Book(props) {

    return (
        <>
        <div  className = "book" >
            <h2>{props.data.Author}</h2>
            <h3>{props.data.title}</h3>
            <img src={props.data.imgLink} />
        </div>    
        </>
    )
}

export default Book
