import React from 'react';
import { Link } from 'react-router-dom';   

const Header = (props) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor:"#464246"}} >
        <div className="container-fluid">
        <Link className="nav-link active" aria-current="page" to="/">Polski jazyk</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              <li className="nav-item">
                <Link className="nav-link" to="#">Flash-cards</Link> 
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/books">Books</Link>  
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">1000 words</Link>  
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/alphabet">Alphabet</Link> 
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Movies+subtitles</Link>  
              </li>
            </ul>
          </div>

          <div className="collapse navbar-collapse" id="navbarAccount">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="#">Czeźć {props.username} ! </Link>  
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>  
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
