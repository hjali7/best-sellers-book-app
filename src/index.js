import React from "react"
import  ReactDOM  from "react-dom/client"
import Header from "./Header"
import { books } from "./books"
import Book from "./Book"
import "./index.css"

const BookList = () => {
    return (
        <>
        <Header/>
        <section className="bookList">
            {books.map((book , index) => {
                return (
                    <Book {...book}  number={index} />
                )
            })}
        </section>

        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<BookList/>)