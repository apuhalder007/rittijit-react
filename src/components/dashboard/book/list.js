import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const BookList = () => {
    const [books, setBooks] = useState([]);
  const getBooks = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/books`);
    const data = await response.json();
    console.log(data, 'books');
    setBooks(data.books);
    }
    useEffect(() => {
        getBooks();
    }, []);
    return ( 
        <div>
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">All Books</h1>
                
            </div>
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Publisher</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                        books.length > 0 && books.map((book, index) => (
                            <tr key={index}>
                                <td>{book.name}</td>
                                <td>{book.author}</td>
                                <td>{book.publisher}</td>
                                <td>{book.createdAt}</td>
                                <td>
                                    <Link to={`/dashboard/books/edit/${book._id}`}><i className="fa fa-edit"></i></Link>
                                    &nbsp;|&nbsp;
                                    <Link to={`/dashboard/books/delete/${book._id}`}><i className="fa fa-trash"></i></Link>
                                    &nbsp;|&nbsp;
                                    <Link to={`/dashboard/books/status/${book._id}`}><i className="fa fa-eye-slash"></i></Link>
                                </td>
                            </tr>
                        ))

                    }
                
                </tbody>
            </table>
        </div>
     );
}

export default BookList;