import React, { useState } from 'react';

const Navbar = ({ setCategory }) => {
    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (category) => {
        setCategory(category);
        setActiveItem(category);
    };

    const navItems = [
        { category: 'technology', label: 'Technology' },
        { category: 'business', label: 'Business' },
        { category: 'health', label: 'Health' },
        { category: 'science', label: 'Science' },
        { category: 'sports', label: 'Sports' },
        { category: 'entertainment', label: 'Entertainment' },
    ];

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-black" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <span className="badge rounded p-2 fw-bold text-dark bg-light fs-4">NewsWorld</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {navItems.map((item) => (
                            <li className="nav-item" key={item.category}>
                                <div
                                    className={`nav-link ${activeItem === item.category ? 'fw-bold text-white' : ''}`}
                                    onClick={() => handleItemClick(item.category)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {item.label}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
