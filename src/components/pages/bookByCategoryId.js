import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Categories from "../sidebar/category";
import BookCard from "../listCard/bookCard";

const BookByCategoryId = (props) => {
    const { categoryId } = useParams();
    const [books, setBooks] = useState([]);
    const getBooks = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/books/category/${categoryId}`);
    const data = await response.json();
    console.log(data, 'books');
    setBooks(data.books);
    }
    useEffect(() => {
        getBooks();
    },[categoryId]);
    return (
        <div className="container-fluid text-center">    
        <div className="row content">
            <div className="col-sm-3 sidenav">
                <Categories></Categories>
            </div>
            <div className="col-sm-9 text-left"> 
                <h1>{books.length ? books[0].category.name : ''}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <hr></hr>
                { books.length <= 0 ? 
                    <div> No Books Found</div> : 
                    books.map((book, index) => (
                        <BookCard key={index} book={book}></BookCard>
                    ))
                }
        </div>
        </div>
        </div>
    );

}

export default BookByCategoryId;