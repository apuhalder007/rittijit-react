import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from "../../../userContext";

const BookList = () => {
    const { userToken } = useContext(UserContext);
    const [books, setBooks] = useState([]);
  const getBooks = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/books`,
    {
        headers: {
            "Content-Type": "application/json",
            "Authorization": userToken
        }
    });
    const data = await response.json();
    console.log(data, 'books');
    setBooks(data.books);
    }

    const deleteBook = async (e, id) => {
        e.preventDefault();
        const result = window.confirm("Want to delete?");
        if (result) {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/book/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": userToken
                }
            });
            const data = await response.json();
            console.log(data);
            getBooks();
        }
        
    }

    const updateStatus = async (e, id, currentStatus) => {
        e.preventDefault();
        let status = '';
        if (currentStatus === 'active') {
            status = 'inactive';
        }else{
            status = 'active';
        }
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
                    <th>Status</th>
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
                                <td>{book.status}</td>
                                <td>{book.createdAt}</td>
                                <td>
                                    <Link to={`/dashboard/books/edit/${book._id}`}><i className="fa fa-edit"></i></Link>
                                    &nbsp;|&nbsp;
                                    <Link onClick={(e)=>deleteBook(e, book._id)}><i className="fa fa-trash"></i></Link>
                                    &nbsp;|&nbsp;
                                    <Link onClick={(e)=>updateStatus(e, book._id, book.status)}><i className="fa fa-eye-slash"></i></Link>
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