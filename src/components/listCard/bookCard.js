import { Link } from 'react-router-dom';
const BookCard = ({ book }) => {
    const grridImage = 'https://placehold.it/150x80?text=IMAGE';
    return (
        <div className="col-sm-4">
            <div className="card">
            <div className="card-image">
                <img src={grridImage} className="img-responsive" 
                style={{width:'100%'}} alt="Image" />
            </div>
            <div className="card-content">
                <h4>{book.name}</h4>
            </div>
            <div className="card-action">
                <Link to={`/books/${book._id}`}>Read More</Link>
            </div>
            </div>
        </div>
    );
};

export default BookCard;