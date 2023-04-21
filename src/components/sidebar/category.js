import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Categories() {
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/book/categories`);
        const data = await response.json();
        console.log(data, 'categories data');
        setCategories(data.categories);
    }

    useEffect(() => {
        fetchCategories();
    }, []);


  return (

    <div>
        {/* <h2>Categories</h2> */}
        { categories.length > 0 && categories.map((category, index) => (
            <p key={index}><Link to={`/books/category/${category._id}`} >{category.name}</Link></p>
            ))
        }
    </div>
  )
}

export default Categories