import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/#"><span style={{color:"white" , fontWeight:'500',fontSize:'1.5rem'}}>Updated</span><span style={{color:"yellow" , fontWeight:'500', fontSize:'1.5rem'}}>News</span></a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                               <Link className="nav-link active" to="/general" style={{color:'white'}} >Genral</Link> 
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/business" style={{color:'white'}}>Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/sports" style={{color:'white'}}>Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/technology" style={{color:'white'}} >Technology</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/entertainment" style={{color:'white'}} >Entertainment</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
