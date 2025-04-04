import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';

// Navbar and Footer came from Bootstrap
// Change <a> tags to <Link> tags
// Change class to className
export function Navbar({ isAuth, setIsAuth }) {

    const signUserOut = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            setIsAuth(false);
        });
    };

    return (
        <nav className="navbar navbar-expand-lg bg-white border-bottom box-shadow">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src="/transparentKagamiLogo.png" alt="Kagami Logo" width="30" className="me-2" />
                    Kagami Village
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/createpost">Create Post</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/weather">Kagami Weather</Link>
                        </li>
                        {!isAuth ? (
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <button className="btn btn-outline-danger my-2 my-sm-0" onClick={signUserOut}>
                                    Logout
                                </button>
                            </li>
                        )}
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Admin
                            </Link>
                            <ul className="dropdown-menu">
                                {/* <li><Link className="dropdown-item" to="/createpost">Create Post</Link></li> */}
                                {/* <li><Link className="dropdown-item" to="./pages/login">Login</Link></li>
                                <li><Link className="dropdown-item" to="/logout">Logout</Link></li> */}
                                {/* <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/fishing">Fishing</Link></li>
                                <li><Link className="dropdown-item" to="/camping">Camping</Link></li>
                                <li><Link className="dropdown-item" to="/onsen">Rio Onsen</Link></li> */}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export function Footer() {
    return (
        <footer className="bg-body-tertiary text-center text-lg-start">
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                <img src="/sakura.png" alt="Sakura Icon" width="30" className="me-2" />
                <span>© 2025 by Daguma Inc. All Rights Reserved.</span>
            </div>
        </footer>
    )
}