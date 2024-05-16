import React, { useState } from 'react'; 
const Navbar = ({ setCategory }) => {
    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (category) => {
        setCategory(category);
        setActiveItem(category);
        console.log('Active Item:', activeItem);
    };
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-black" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><span className="Badge rounded p-2 fw-bold text-dark bg-light fs-4">NewsWorld</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <div className={`nav-link ${activeItem === 'technology' ? 'fw-bold text-white' : ''}`} onClick={() => setCategory("technology")} style={{ cursor: 'pointer' , textDecoration: activeItem === 'business' ? 'underline' : 'none' }}>Technology</div>
                        </li>
                        <li className="nav-item">
                            <div className={`nav-link ${activeItem === 'business' ? 'fw-bold text-white' : ''}`} onClick={() => setCategory("business")} style={{ cursor: 'pointer', textDecoration: activeItem === 'business' ? 'underline' : 'none'  }}>Business</div>
                        </li>
                        <li className="nav-item">
                            <div className={`nav-link ${activeItem === 'health' ? 'fw-bold text-white' : ''}`} onClick={() => setCategory("health")} style={{ cursor: 'pointer' , textDecoration: activeItem === 'business' ? 'underline' : 'none' }}>Health</div>
                        </li>
                        <li className="nav-item">
                            <div className={`nav-link ${activeItem === 'science' ? 'fw-bold text-white' : ''}`} onClick={() => setCategory("science")} style={{ cursor: 'pointer' , textDecoration: activeItem === 'business' ? 'underline' : 'none' }}>Science</div>
                        </li>
                        <li className="nav-item">
                            <div className={`nav-link ${activeItem === 'sports' ? 'fw-bold text-white' : ''}`} onClick={() => setCategory("sports")} style={{ cursor: 'pointer' , textDecoration: activeItem === 'business' ? 'underline' : 'none' }}>Sports</div>
                        </li>
                        <li className="nav-item">
                            <div className={`nav-link ${activeItem === 'entertainment' ? 'fw-bold text-white' : ''}`} onClick={() => setCategory("entertainment")} style={{ cursor: 'pointer', textDecoration: activeItem === 'business' ? 'underline' : 'none'  }}>Entertainment</div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;