import React from 'react'
import Book from './Book'

function BookStore() {
  const books = [{ Author: "Ashneer Grover", title: "Doglapan", imgLink: "https://productimages.worldofbooks.com/067009711X.jpg" }, { Author: "Ashneer Grover", title: "Doglapan", imgLink: "https://productimages.worldofbooks.com/067009711X.jpg" }, { Author: "Ashneer Grover", title: "Doglapan", imgLink: "https://productimages.worldofbooks.com/067009711X.jpg" }, { Author: "Ashneer Grover", title: "Doglapan", imgLink: "https://productimages.worldofbooks.com/067009711X.jpg" }, { Author: "Ashneer Grover", title: "Doglapan", imgLink: "https://productimages.worldofbooks.com/067009711X.jpg" }, { Author: "Ashneer Grover", title: "Doglapan", imgLink: "https://productimages.worldofbooks.com/067009711X.jpg" }];
  
  return (
    <div  className = "booklist">
    {
      books.map((a, index)=>(
        <Book data={a} key={index}/>
      ))
    }
       
      {/* <Book {...book1} /> */}
    </div>
  )
}

export default BookStore
