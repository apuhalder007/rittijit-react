import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../userContext";
const EditBook = () => {
    const { userToken } = useContext(UserContext);
    console.log(userToken);
    const { bookId } = useParams();
    
    const [book, setBook] = useState({});
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState();
    const [author, setAuthor] = useState();
    const [description, setDescription] = useState();
    const [publisher, setPublisher] = useState();
    const [category, setCategory] = useState('');
    const [status, setStatus] = useState();
    const [suceessMessage, setSuccessMessage] = useState('');

    const fetchCategories = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/book/categories`,{
            headers: {
                "Content-Type": "application/json",
                "Authorization": userToken
            }
        });
        const data = await response.json();
        console.log(data, 'categories data');
        setCategories(data.categories);
    }

    const getBook= async ()=>{
        const response = await fetch(`${process.env.REACT_APP_API_URL}/books/${bookId}`,{
            headers: {
                "Content-Type": "application/json",
                "Authorization": userToken
            }
        });
        const data = await response.json();
        console.log(data);
        setBook(data.book[0]);
        
    }

    useEffect(() => {
        getBook();
        fetchCategories();
    }, [])

   async function handleSubmit(e) {
        e.preventDefault();
        const bookData = { _id:book._id, 
            name, 
            author, 
            descriptions: description, 
            publisher, 
            category: category ? category: book.category, 
            status };
        const response = await fetch(`${process.env.REACT_APP_API_URL}/book/update/${bookId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": userToken
                },
                body: JSON.stringify(bookData)
            });

            const data = await response.json();
            console.log(data);
            setSuccessMessage(data.message);
    }
    return (
        <div>
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Edit Book</h1>
                
            </div>
            {/* alert success */}
            {suceessMessage && 
            <div className="alert alert-success" role="alert">
                {suceessMessage}
            </div>}
            <form onSubmit={handleSubmit}>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Book Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name ? name : book.name}
                        onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Author</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" 
                        value={author ? author : book.author} 
                        onChange={(e)=>setAuthor(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Publisher</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" 
                        value={publisher ? publisher : book.publisher } 
                        onChange={(e)=>setPublisher(e.target.value)}/>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" 
                    onChange={(e)=>setDescription(e.target.value)} value={ description? description: book.descriptions}></textarea>
                    </div>
                    <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Category</label>
                    <select className="form-control"
                    onChange={(e)=>setCategory(e.target.value)}
                    value={category ? category : book.category}>
                        
                        {
                            categories.length > 0 && categories.map((category, index) => (
                                <option key={index} value={category._id}>{category.name}</option>
                                
                            ))
                        }
                        
                    </select>
                    </div>
                    <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Status</label>
                    <select className="form-control"
                    onChange={(e)=>setStatus(e.target.value)}
                    value={status ? status : book.status}
                    >
                        <option>Select Status</option>
                        <option value={'active'}>Active</option>
                        <option value={'inactive'}>Inactive</option>
                    </select>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            
        </div>
    )
}

export default EditBook;