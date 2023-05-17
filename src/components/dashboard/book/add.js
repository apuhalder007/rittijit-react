import { useState, useEffect, useContext} from "react";
import { UserContext } from "../../../userContext";
const AddBooks = () => {
    const { userToken } = useContext(UserContext);
    const [categories, setCategories] = useState([]);
    const [bookName, setBookName] = useState('');
    const [author, setAuthor] = useState('');
    const [publisher, setPublisher] = useState('');
    const [category, setCategory] = useState('');
    const [suceessMessage, setSuccessMessage] = useState('');
    const fetchCategories = async () => {
        const response = await fetch('http://localhost:4000/book/categories');
        const data = await response.json();
        console.log(data);
        setCategories(data.categories);
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    const submitBook = async (e) => {
        let book = {};
        console.log(bookName, 'submitting book');
        e.preventDefault();
        book = {
            name: bookName,
            author,
            publisher,
            category
        };
        //console.log(book);
        const response = await fetch('http://localhost:4000/add-book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + userToken
            },
            body: JSON.stringify(book)
        });
        const data = await response.json();
        setSuccessMessage(data.message);
        setBookName('');
        setAuthor('');
        setPublisher('');
        setCategory('');

        console.log(data);
    }

    return (
        <div className="container-fluid text-center">    
            <div className="row content">
                <div className="col-sm-6 col-offset-3">
                    <h1>Add Books</h1>
                    {suceessMessage && <div className="alert alert-success" role="alert">
                        {suceessMessage}
                    </div>}
                    
                    <form onSubmit={submitBook}>
                    <div className="form-group">
                        
                        <input type="text" name="name" className="form-control" id="Name" aria-describedby="titleHelp" placeholder="Enter title" 
                        onChange={(e)=>setBookName(e.target.value)} 
                        value={bookName}
                        />
                    </div>
                    <div className="form-group">
                        
                        <input type="text" name="author" className="form-control" id="author" placeholder="Author" 
                        onChange={(e)=>setAuthor(e.target.value)} 
                        value={author}
                        />
                    </div>
                    <div className="form-group">
                        <input name="publisher" className="form-control" id="publisher" placeholder="Publisher" onChange={(e)=>setPublisher(e.target.value)} 
                        value={publisher}/>
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <input type="file" name="image" className="form-control" id="image" placeholder="Image" />
                    </div> */}
                    <div className="form-group">
                        
                        <select name="category" className="form-control" id="category" 
                        onChange={(e)=>setCategory(e.target.value)}>
                            {categories.length > 0 && categories.map((category, index) => (
                                <option key={index} value={category._id}>{category.name}</option>
                            ))}
                            
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddBooks