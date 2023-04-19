import {useNavigate, Link} from 'react-router-dom';
function Header() {
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.searchValue.value);
        //return <Navigate to="/" replace={true} />;
        navigate(`/?serach=${e.target.searchValue.value}`);
    }

  return (
    <header>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>                        
            </button>
            <Link to="/" className="navbar-brand">Logo</Link>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
                <li className="active"><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
                        <input name="searchValue" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </li>
                <li><Link to="#"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
            </ul>
            </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;