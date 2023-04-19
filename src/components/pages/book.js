import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Categories from "../sidebar/category";
import BookCard from "../listCard/bookCard";

function Book() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const serachTerm = encodeURIComponent(searchParams.get('serach'));
  //console.log(serachTerm, 'serachTerm');
  let endPoint = '/books';
  if(serachTerm && serachTerm !== ''){
    endPoint = `/books/search/${serachTerm}`;
  }

  const [books, setBooks] = useState([]);
  const getBooks = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}${endPoint}`);
    const data = await response.json();
    console.log(data, 'books');
    setBooks(data.books);
    }
    useEffect(() => {
        getBooks();
    }, [endPoint]);

  return (
     
    <div className="container-fluid text-center">    
            <div className="row content">
                <div className="col-sm-3 sidenav">
                    <Categories></Categories>
                </div>
                <div className="col-sm-9 text-left"> 
                    <h1>Welcome</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <hr></hr>
                    {books.length > 0 && books.map((book, index) => (
                        <BookCard key={index} book={book}></BookCard>
                    ))}
            </div>
        </div>
    </div>
  )
}

export default Book